import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { timeAgo } from '../utils/dateUtils';
import { UserAvatar } from './UserAvatar';
import type { Comment } from '../types';
import './CommentSection.css';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment?: (content: string, parentId?: string) => void;
}

export function CommentSection({ comments = [], onAddComment }: CommentSectionProps) {
  const { currentUser, getUserById } = useAuth();
  const [text, setText] = useState('');
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const topLevel = comments.filter((c) => !c.parentId);
  const getReplies = (commentId: string) => comments.filter((c) => c.parentId === commentId);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || !currentUser || !onAddComment) return;
    onAddComment(trimmed);
    setText('');
  }

  function handleReplySubmit(e: React.SyntheticEvent, parentId: string) {
    e.preventDefault();
    const trimmed = replyText.trim();
    if (!trimmed || !currentUser || !onAddComment) return;
    onAddComment(trimmed, parentId);
    setReplyText('');
    setReplyingToId(null);
  }

  function startReply(topLevelId: string) {
    setReplyingToId(topLevelId);
    setReplyText('');
  }

  function renderComment(comment: Comment, topLevelId: string) {
    const isReply = comment.id !== topLevelId;
    const author = getUserById(comment.authorId);
    return (
      <div key={comment.id} className={`comment-section__item${isReply ? ' comment-section__item--reply' : ''}`}>
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
              {onAddComment && currentUser && (
                <button
                  className="comment-section__reply-btn"
                  onClick={() => startReply(topLevelId)}
                >
                  Reply
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="comment-section__body">
            <p className="comment-section__content">{comment.content}</p>
          </div>
        )}
      </div>
    );
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
        {topLevel.length === 0 && (
          <div className="comment-section__empty">No comments yet.</div>
        )}
        {topLevel.map((comment) => {
          const replies = getReplies(comment.id);
          return (
            <div key={comment.id} className="comment-section__thread">
              {renderComment(comment, comment.id)}

              {replies.length > 0 && (
                <div className="comment-section__replies">
                  {replies.map((reply) => renderComment(reply, comment.id))}
                </div>
              )}

              {replyingToId === comment.id && currentUser && onAddComment && (
                <form
                  onSubmit={(e) => handleReplySubmit(e, comment.id)}
                  className="comment-section__reply-form"
                >
                  <UserAvatar user={currentUser} size="sm" />
                  <input
                    type="text"
                    className="comment-section__input"
                    placeholder={`Reply to ${getUserById(comment.authorId)?.username ?? 'comment'}...`}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    maxLength={500}
                    autoFocus
                  />
                  <button type="submit" className="btn btn--sm" disabled={!replyText.trim()}>
                    Reply
                  </button>
                  <button
                    type="button"
                    className="btn btn--secondary btn--sm"
                    onClick={() => setReplyingToId(null)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
