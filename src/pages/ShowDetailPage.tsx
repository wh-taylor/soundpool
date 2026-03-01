import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { CommentSection } from '../components/CommentSection';
import { formatShowDate } from '../utils/dateUtils';
import type { Comment } from '../types';
import './ShowDetailPage.css';

export function ShowDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { shows, addCommentToShow, deleteShow } = useApp();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [copied, setCopied] = useState(false);

  const show = shows.find((s) => s.id === id);

  if (!show) {
    return (
      <div className="page">
        <div className="empty-state">Show not found. <Link to="/shows">Back to shows</Link></div>
      </div>
    );
  }

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: show the URL
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function handleAddComment(content: string, parentId?: string) {
    if (!currentUser || !show) return;
    const comment: Comment = {
      id: crypto.randomUUID(),
      authorId: currentUser.id,
      content,
      parentId,
      createdAt: new Date().toISOString(),
    };
    addCommentToShow(show.id, comment);
  }

  return (
    <div className="page">
      <div className="show-detail">
        <div className="show-detail__back">
          <Link to="/shows" className="show-detail__back-link">← Back to Shows</Link>
        </div>

        <div className="show-detail__layout">
          {/* Flyer */}
          <div className="show-detail__flyer-col">
            <img src={show.flyerUrl} alt={show.title} className="show-detail__flyer" />
          </div>

          {/* Info */}
          <div className="show-detail__info-col">
            <div className="show-detail__badges">
              <span className="tag tag--show">Show</span>
              <span className="tag tag--age">{show.ageRestriction}</span>
            </div>

            <h1 className="show-detail__title">{show.title}</h1>

            <div className="show-detail__meta-block">
              <div className="show-detail__meta-item">
                <span className="show-detail__meta-label">Date</span>
                <span className="show-detail__meta-value">{formatShowDate(show.date)}</span>
              </div>
              <div className="show-detail__meta-item">
                <span className="show-detail__meta-label">City</span>
                <span className="show-detail__meta-value">{show.city}</span>
              </div>
              <div className="show-detail__meta-item">
                <span className="show-detail__meta-label">Address</span>
                <span className="show-detail__meta-value">
                  {show.address ?? 'DM for address'}
                </span>
              </div>
              <div className="show-detail__meta-item">
                <span className="show-detail__meta-label">Venue</span>
                <a
                  href={`https://instagram.com/${show.venueInstagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="show-detail__venue-link"
                >
                  @{show.venueInstagram}
                </a>
              </div>
            </div>

            <div className="show-detail__actions">
              <button className="btn btn--secondary show-detail__share-btn" onClick={handleShare}>
                <span>🔗</span>
                {copied ? 'Link copied!' : 'Share this event'}
              </button>
              {currentUser?.id === show.authorId && (
                <button
                  className="btn btn--danger"
                  onClick={() => { deleteShow(show.id); navigate('/shows'); }}
                >
                  Delete Show
                </button>
              )}
            </div>
          </div>
        </div>

        <CommentSection comments={show.comments} onAddComment={handleAddComment} />
      </div>
    </div>
  );
}
