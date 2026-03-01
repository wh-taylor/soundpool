import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { compressImage } from '../utils/imageUtils';
import { CITIES } from '../data/cities';
import type { Show, AgeRestriction } from '../types';

interface CreateShowModalProps {
  onClose: () => void;
}

const AGE_OPTIONS: AgeRestriction[] = ['All Ages', '18+', '21+'];

export function CreateShowModal({ onClose }: CreateShowModalProps) {
  const { currentUser } = useAuth();
  const { addShow } = useApp();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [dmForAddress, setDmForAddress] = useState(false);
  const [address, setAddress] = useState('');
  const [venueInstagram, setVenueInstagram] = useState('');
  const [ageRestriction, setAgeRestriction] = useState<AgeRestriction>('All Ages');
  const [flyerData, setFlyerData] = useState('');
  const [flyerPreview, setFlyerPreview] = useState('');
  const [error, setError] = useState('');

  async function handleFlyer(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const c = await compressImage(file, 1200, 0.8);
    setFlyerData(c);
    setFlyerPreview(c);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!currentUser) return;
    if (!title.trim()) { setError('Title is required.'); return; }
    if (!date) { setError('Date is required.'); return; }
    if (!city) { setError('City is required.'); return; }
    if (!venueInstagram.trim()) { setError('Venue Instagram is required.'); return; }
    if (!flyerData) { setError('Flyer image is required.'); return; }

    const show: Show = {
      id: crypto.randomUUID(),
      title: title.trim(),
      flyerUrl: flyerData,
      date,
      city,
      address: dmForAddress ? null : (address.trim() || null),
      venueInstagram: venueInstagram.trim().replace(/^@/, ''),
      ageRestriction,
      authorId: currentUser.id,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    addShow(show);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-box__title">Post a Show</div>
        <button className="modal-box__close" onClick={onClose}>✕</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Show Title *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Artist @ Venue" />
          </div>
          <div className="form-group">
            <label>Date *</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>City *</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select city...</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Address</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', textTransform: 'none', letterSpacing: 0, color: 'var(--text-muted)' }}>
                <input
                  type="checkbox"
                  checked={dmForAddress}
                  onChange={(e) => setDmForAddress(e.target.checked)}
                  style={{ width: 'auto' }}
                />
                DM for address
              </label>
            </div>
            {!dmForAddress && (
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="123 Main St (leave blank if private)" />
            )}
          </div>
          <div className="form-group">
            <label>Venue Instagram *</label>
            <input type="text" value={venueInstagram} onChange={(e) => setVenueInstagram(e.target.value)} placeholder="@venuehandle" />
          </div>
          <div className="form-group">
            <label>Age Restriction</label>
            <div className="toggle-grid">
              {AGE_OPTIONS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`toggle-btn ${ageRestriction === a ? 'active' : ''}`}
                  onClick={() => setAgeRestriction(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Flyer Image *</label>
            {flyerPreview && <img src={flyerPreview} alt="" style={{ width: '100%', maxHeight: 200, objectFit: 'contain', marginBottom: 8, background: 'var(--bg-input)' }} />}
            <input type="file" accept="image/*" onChange={handleFlyer} />
          </div>
          {error && <p className="form-error">{error}</p>}
          <div className="form-actions">
            <button type="button" className="btn btn--secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn--lime">Post Show</button>
          </div>
        </form>
      </div>
    </div>
  );
}
