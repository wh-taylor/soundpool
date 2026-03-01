import { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { UserAvatar } from '../components/UserAvatar';
import { compressImage } from '../utils/imageUtils';
import { timeAgo } from '../utils/dateUtils';
import { Link } from 'react-router-dom';
import { CITIES } from '../data/cities';
import type { PhotographerPost } from '../types';
import './PhotographersPage.css';

export function PhotographersPage() {
  const { currentUser, getUserById } = useAuth();
  const { photographerPosts, addPhotographerPost } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');

  const [description, setDescription] = useState('');
  const [lookingForBands, setLookingForBands] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState('');

  const filtered = useMemo(() => {
    if (!locationFilter) return photographerPosts;
    return photographerPosts.filter((post) => {
      const author = getUserById(post.authorId);
      return author?.location === locationFilter;
    });
  }, [photographerPosts, locationFilter, getUserById]);

  async function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, 6);
    const compressed = await Promise.all(files.map((f) => compressImage(f, 800, 0.8)));
    setImages(compressed);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!currentUser) return;
    if (!description.trim()) { setError('Description is required.'); return; }

    const post: PhotographerPost = {
      id: crypto.randomUUID(),
      authorId: currentUser.id,
      images,
      description: description.trim(),
      lookingForBands,
      createdAt: new Date().toISOString(),
    };
    addPhotographerPost(post);
    setModalOpen(false);
    setDescription(''); setImages([]); setLookingForBands(false);
  }

  return (
    <div className="page">
      <div className="photos-page__header">
        <h1 className="page-heading">Photographers</h1>
        <button className="btn btn--secondary" onClick={() => setModalOpen(true)}>+ Post Portfolio</button>
      </div>
      <p className="photos-page__sub">
        Photographers posting their work and looking for bands to shoot.
      </p>

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
          {locationFilter ? `No photographers in ${locationFilter} yet.` : 'No photographer posts yet.'}
        </div>
      ) : (
        <div className="photos-page__grid">
          {filtered.map((post) => {
            const author = getUserById(post.authorId);
            return (
              <div key={post.id} className="photo-card panel">
                {post.images.length > 0 ? (
                  <div className="photo-card__gallery">
                    {post.images.slice(0, 4).map((img, i) => (
                      <img key={i} src={img} alt="" className="photo-card__thumb" />
                    ))}
                  </div>
                ) : (
                  <div className="photo-card__gallery-empty">No images uploaded</div>
                )}

                <div className="photo-card__body">
                  {author && (
                    <div className="photo-card__author">
                      <UserAvatar user={author} size="sm" />
                      <div>
                        <Link to={`/profile/${author.username}`} className="photo-card__username">
                          {author.username}
                        </Link>
                        <div className="photo-card__location">{author.location}</div>
                      </div>
                    </div>
                  )}

                  {post.lookingForBands && (
                    <span className="tag tag--photo" style={{ marginBottom: 8, display: 'inline-block' }}>
                      Looking for bands
                    </span>
                  )}

                  <p className="photo-card__desc">{post.description}</p>
                  <span className="photo-card__time">{timeAgo(post.createdAt)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-box">
            <div className="modal-box__title">Post Portfolio</div>
            <button className="modal-box__close" onClick={() => setModalOpen(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Photos (up to 6)</label>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                  {images.map((img, i) => (
                    <img key={i} src={img} alt="" style={{ width: 80, height: 80, objectFit: 'cover' }} />
                  ))}
                </div>
                <input type="file" accept="image/*" multiple onChange={handleImages} />
              </div>
              <div className="form-group">
                <label>About your work *</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Describe your style, availability, rates..." />
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, textTransform: 'none', letterSpacing: 0, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <input type="checkbox" checked={lookingForBands} onChange={(e) => setLookingForBands(e.target.checked)} style={{ width: 'auto' }} />
                  Looking for bands to shoot
                </label>
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
