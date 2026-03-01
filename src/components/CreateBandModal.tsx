import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { CustomizationPanel } from './CustomizationPanel';
import { compressImage, fileToBase64 } from '../utils/imageUtils';
import { CITIES } from '../data/cities';
import { GENRES } from '../data/genres';
import type { Band, Customization } from '../types';

interface CreateBandModalProps {
  onClose: () => void;
}

const AUDIO_MAX_BYTES = 2 * 1024 * 1024; // 2MB

export function CreateBandModal({ onClose }: CreateBandModalProps) {
  const { currentUser } = useAuth();
  const { addBand } = useApp();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [audioData, setAudioData] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [customization, setCustomization] = useState<Customization>({});
  const [error, setError] = useState('');

  function toggleGenre(g: string) {
    setGenres((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);
  }

  async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const c = await compressImage(file, 800, 0.8);
    setImageData(c);
    setImagePreview(c);
  }

  async function handleAudio(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > AUDIO_MAX_BYTES) {
      setError('Audio file must be under 2 MB. Paste a URL instead.');
      e.target.value = '';
      return;
    }
    const data = await fileToBase64(file);
    setAudioData(data);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!currentUser) return;
    if (!name.trim()) { setError('Band name is required.'); return; }
    if (!location) { setError('Location is required.'); return; }
    if (!description.trim()) { setError('Description is required.'); return; }
    if (!imageData) { setError('Band image is required.'); return; }

    const band: Band = {
      id: crypto.randomUUID(),
      name: name.trim(),
      location,
      genres,
      description: description.trim(),
      imageUrl: imageData,
      gifUrl: '',
      adminId: currentUser.id,
      members: [{ userId: currentUser.id, status: 'accepted' }],
      audioUrl: audioUrl.trim() || undefined,
      audioData: audioData || undefined,
      customization: Object.keys(customization).length ? customization : undefined,
      createdAt: new Date().toISOString(),
    };
    addBand(band);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-box__title">Post a Band</div>
        <button className="modal-box__close" onClick={onClose}>✕</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Band Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your band name" />
          </div>
          <div className="form-group">
            <label>Location *</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select city...</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Description *</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="What's your band about?" />
          </div>
          <div className="form-group">
            <label>Genres</label>
            <div className="toggle-grid">
              {GENRES.map((g) => (
                <button key={g} type="button" className={`toggle-btn ${genres.includes(g) ? 'active' : ''}`} onClick={() => toggleGenre(g)}>
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Band Image * (required)</label>
            {imagePreview && <img src={imagePreview} alt="" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', marginBottom: 8 }} />}
            <input type="file" accept="image/*" onChange={handleImage} />
          </div>
          <div className="form-group">
            <label>Audio — File Upload (max 2MB)</label>
            <input type="file" accept="audio/*" onChange={handleAudio} />
          </div>
          <div className="form-group">
            <label>Audio — URL (SoundCloud, Spotify, .mp3)</label>
            <input type="url" value={audioUrl} onChange={(e) => setAudioUrl(e.target.value)} placeholder="https://soundcloud.com/..." />
          </div>
          <CustomizationPanel value={customization} onChange={setCustomization} />
          {error && <p className="form-error" style={{ marginTop: 12 }}>{error}</p>}
          <div className="form-actions">
            <button type="button" className="btn btn--secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn">Post Band</button>
          </div>
        </form>
      </div>
    </div>
  );
}
