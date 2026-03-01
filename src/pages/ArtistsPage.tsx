import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { UserAvatar } from '../components/UserAvatar';
import { compressImage } from '../utils/imageUtils';
import { CITIES } from '../data/cities';
import { ART_MEDIUMS } from '../data/artMediums';
import { timeAgo } from '../utils/dateUtils';
import type { ArtistPost } from '../types';
import './ArtistsPage.css';

export function ArtistsPage() {
  const { currentUser, getUserById } = useAuth();
  const { artistPosts, addArtistPost } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');
  const [mediumFilters, setMediumFilters] = useState<string[]>([]);

  const [mediums, setMediums] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [instagram, setInstagram] = useState('');
  const [website, setWebsite] = useState('');
  const [imageData, setImageData] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');

  function toggleMedium(m: string) {
    setMediums((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);
  }

  function toggleMediumFilter(m: string) {
    setMediumFilters((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);
  }

  const filtered = useMemo(() => {
    let list = [...artistPosts];
    if (locationFilter) {
      list = list.filter((a) => {
        const author = getUserById(a.authorId);
        const city = a.city ?? author?.location ?? '';
        return city === locationFilter;
      });
    }
    if (mediumFilters.length > 0) {
      list = list.filter((a) =>
        mediumFilters.some((m) => a.mediums.includes(m))
      );
    }
    return list;
  }, [artistPosts, locationFilter, mediumFilters, getUserById]);

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
    if (!description.trim()) { setError('Description is required.'); return; }

    const post: ArtistPost = {
      id: crypto.randomUUID(),
      authorId: currentUser.id,
      mediums,
      description: description.trim(),
      imageUrl: imageData || undefined,
      instagram: instagram.trim() || undefined,
      website: website.trim() || undefined,
      createdAt: new Date().toISOString(),
    };
    addArtistPost(post);
    setModalOpen(false);
    setMediums([]); setDescription(''); setInstagram(''); setWebsite(''); setImageData(''); setImagePreview('');
  }

  return (
    <div className="page">
      <div className="artists-page__header">
        <h1 className="page-heading">Visual Artists</h1>
        <button className="btn" onClick={() => setModalOpen(true)}>+ Post</button>
      </div>
      <p className="artists-page__sub">Visual artists — painters, illustrators, designers, and more.</p>

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
        {locationFilter && locationFilter !== currentUser?.location && (
          <button className="btn btn--secondary btn--sm" onClick={() => setLocationFilter(currentUser?.location ?? '')}>
            My City
          </button>
        )}
        {locationFilter && (
          <button className="btn btn--secondary btn--sm" onClick={() => setLocationFilter('')}>
            Clear Location
          </button>
        )}
      </div>

      <div className="page-filter-genre" style={{ marginBottom: 'var(--sp-xl)' }}>
        {ART_MEDIUMS.map((m) => (
          <button
            key={m}
            className={`page-filter-chip ${mediumFilters.includes(m) ? 'active' : ''}`}
            onClick={() => toggleMediumFilter(m)}
          >
            {m}
          </button>
        ))}
        {mediumFilters.length > 0 && (
          <button className="btn btn--secondary btn--sm" onClick={() => setMediumFilters([])}>
            Clear Mediums
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {locationFilter || mediumFilters.length > 0
            ? 'No visual artists match your filters.'
            : 'No visual artists posted yet.'}
        </div>
      ) : (
        <div className="artists-page__grid">
          {filtered.map((a) => {
            const author = getUserById(a.authorId);
            const displayCity = a.city ?? author?.location ?? '';
            return (
              <div key={a.id} className="artist-card panel">
                {a.imageUrl && <img src={a.imageUrl} alt="" className="artist-card__image" />}
                <div className="artist-card__body">
                  {author && (
                    <div className="artist-card__author">
                      <UserAvatar user={author} size="sm" />
                      <div>
                        <Link to={`/profile/${author.username}`} className="artist-card__username">
                          {author.username}
                        </Link>
                        {displayCity && (
                          <div className="artist-card__location">{displayCity}</div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="artist-card__meta">
                    {a.instagram && (
                      <a href={`https://instagram.com/${a.instagram}`} target="_blank" rel="noopener noreferrer" className="artist-card__link">
                        @{a.instagram}
                      </a>
                    )}
                    {a.website && (
                      <a href={a.website} target="_blank" rel="noopener noreferrer" className="artist-card__link artist-card__link--website">
                        Portfolio
                      </a>
                    )}
                  </div>
                  <div className="artist-card__genres">
                    {a.mediums.map((m) => <span key={m} className="tag tag--genre">{m}</span>)}
                  </div>
                  <p className="artist-card__desc">{a.description}</p>
                  <span className="artist-card__time">{timeAgo(a.createdAt)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-box">
            <div className="modal-box__title">Post as Visual Artist</div>
            <button className="modal-box__close" onClick={() => setModalOpen(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label>About your work *</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Describe your style, what you make, availability..." /></div>
              <div className="form-group">
                <label>Mediums</label>
                <div className="toggle-grid">
                  {ART_MEDIUMS.map((m) => (
                    <button key={m} type="button" className={`toggle-btn ${mediums.includes(m) ? 'active' : ''}`} onClick={() => toggleMedium(m)}>{m}</button>
                  ))}
                </div>
              </div>
              <div className="form-group"><label>Instagram Handle</label><input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@handle" /></div>
              <div className="form-group"><label>Website / Portfolio URL</label><input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://..." /></div>
              <div className="form-group">
                <label>Image</label>
                {imagePreview && <img src={imagePreview} alt="" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', marginBottom: 8 }} />}
                <input type="file" accept="image/*" onChange={handleImage} />
              </div>
              {error && <p className="form-error">{error}</p>}
              <div className="form-actions">
                <button type="button" className="btn btn--secondary" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
