import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/dateUtils';
import { UserAvatar } from './UserAvatar';
import type { Comment } from '../types';
import './CommentSection.css';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment?: (content: string) => void;
}

export function CommentSection({ comments = [], onAddComment }: CommentSectionProps) {
  const { currentUser, getUserById } = useAuth();
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || !currentUser || !onAddComment) return;
    onAddComment(trimmed);
    setText('');
  }

  return (
    <div className="comment-section">
      <div className="section-label">Comments ({comments.length})</div>

      {currentUser && onAddComment && (
        <form onSubmit={handleSubmit} className="comment-section__form">
          <UserAvatar user={currentUser} size="sm" />
          <input
            type="text"
            className="comment-section__input"
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
          />
          <button type="submit" className="btn btn--sm" disabled={!text.trim()}>
            Post
          </button>
        </form>
      )}

      <div className="comment-section__list">
        {comments.length === 0 && (
          <div className="comment-section__empty">No comments yet.</div>
        )}
        {comments.map((comment) => {
          const author = getUserById(comment.authorId);
          return (
            <div key={comment.id} className="comment-section__item">
              {author ? (
                <>
                  <UserAvatar user={author} size="sm" />
                  <div className="comment-section__body">
                    <div className="comment-section__meta">
                      <Link to={`/profile/${author.username}`} className="comment-section__username">
                        {author.username}
                      </Link>
                      <span className="comment-section__time">{timeAgo(comment.createdAt)}</span>
                    </div>
                    <p className="comment-section__content">{comment.content}</p>
                  </div>
                </>
              ) : (
                <div className="comment-section__body">
                  <p className="comment-section__content">{comment.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
