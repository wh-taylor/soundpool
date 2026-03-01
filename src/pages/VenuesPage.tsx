import { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { compressImage } from '../utils/imageUtils';
import { CITIES } from '../data/cities';
import { timeAgo } from '../utils/dateUtils';
import type { VenuePost } from '../types';
import './VenuesPage.css';

export function VenuesPage() {
  const { currentUser } = useAuth();
  const { venuePosts, addVenuePost } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');

  const [venueName, setVenueName] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');

  const filtered = useMemo(() => {
    if (!locationFilter) return venuePosts;
    return venuePosts.filter((v) => v.city === locationFilter);
  }, [venuePosts, locationFilter]);

  async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const c = await compressImage(file, 800, 0.8);
    setImageData(c);
    setImagePreview(c);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!currentUser) return;
    if (!venueName.trim()) { setError('Venue name is required.'); return; }
    if (!city) { setError('City is required.'); return; }
    if (!description.trim()) { setError('Description is required.'); return; }

    const handle = instagram.trim().replace(/^@/, '').toLowerCase();
    if (handle) {
      const duplicate = venuePosts.some(
        (v) => v.instagram?.toLowerCase() === handle
      );
      if (duplicate) {
        setError('A venue with this Instagram handle already exists.');
        return;
      }
    }

    const post: VenuePost = {
      id: crypto.randomUUID(),
      authorId: currentUser.id,
      venueName: venueName.trim(),
      city,
      instagram: handle || undefined,
      description: description.trim(),
      imageUrl: imageData || undefined,
      createdAt: new Date().toISOString(),
    };
    addVenuePost(post);
    setModalOpen(false);
    setVenueName(''); setCity(''); setInstagram(''); setDescription(''); setImageData(''); setImagePreview('');
  }

  return (
    <div className="page">
      <div className="venues-page__header">
        <h1 className="page-heading">Venues</h1>
        <button className="btn btn--secondary" onClick={() => setModalOpen(true)}>+ List Venue</button>
      </div>
      <p className="venues-page__sub">Venues looking for artists, and spaces available for shows.</p>

      <div className="page-filters">
        <select
          className="page-filter-select"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {(!locationFilter || locationFilter !== currentUser?.location) && (
          <button className="btn btn--secondary btn--sm" onClick={() => setLocationFilter(currentUser?.location ?? '')}>
            My City
          </button>
        )}
        {locationFilter && (
          <button className="btn btn--secondary btn--sm" onClick={() => setLocationFilter('')}>
            Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {locationFilter ? `No venues in ${locationFilter} yet.` : 'No venues listed yet.'}
        </div>
      ) : (
        <div className="venues-page__list">
          {filtered.map((v) => (
            <div key={v.id} className="venue-card panel">
              {v.imageUrl && <img src={v.imageUrl} alt={v.venueName} className="venue-card__image" />}
              <div className="venue-card__body">
                <div className="venue-card__header">
                  <span className="tag tag--venue">Venue</span>
                  <h3 className="venue-card__name">{v.venueName}</h3>
                </div>
                <div className="venue-card__meta">
                  <span>{v.city}</span>
                  {v.instagram && (
                    <a href={`https://instagram.com/${v.instagram}`} target="_blank" rel="noopener noreferrer" className="venue-card__ig">
                      @{v.instagram}
                    </a>
                  )}
                  <span className="text-muted text-xs">{timeAgo(v.createdAt)}</span>
                </div>
                <p className="venue-card__desc">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-box">
            <div className="modal-box__title">List a Venue</div>
            <button className="modal-box__close" onClick={() => setModalOpen(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label>Venue Name *</label><input type="text" value={venueName} onChange={(e) => setVenueName(e.target.value)} /></div>
              <div className="form-group">
                <label>City *</label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select city...</option>
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group"><label>Instagram Handle</label><input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@handle" /></div>
              <div className="form-group"><label>Description *</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} /></div>
              <div className="form-group">
                <label>Image</label>
                {imagePreview && <img src={imagePreview} alt="" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', marginBottom: 8 }} />}
                <input type="file" accept="image/*" onChange={handleImage} />
              </div>
              {error && <p className="form-error">{error}</p>}
              <div className="form-actions">
                <button type="button" className="btn btn--secondary" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn">List Venue</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
