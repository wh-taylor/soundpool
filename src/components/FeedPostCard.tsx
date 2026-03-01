import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserAvatar } from './UserAvatar';
import { CommentSection } from './CommentSection';
import { timeAgo } from '../utils/dateUtils';
import { getEmbedUrl } from '../utils/videoUtils';
import type { FeedPost } from '../types';
import './FeedPostCard.css';

interface FeedPostCardProps {
  post: FeedPost;
  onDelete?: () => void;
  onAddComment?: (content: string, parentId?: string) => void;
}

export function FeedPostCard({ post, onDelete, onAddComment }: FeedPostCardProps) {
  const { getUserById } = useAuth();
  const author = getUserById(post.authorId);
  const embedUrl = post.videoUrl ? getEmbedUrl(post.videoUrl) : null;
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="feed-post-card panel">
      <div className="feed-post-card__header">
        <span className="tag tag--post">Post</span>
        <div className="feed-post-card__author">
          {author ? (
            <>
              <UserAvatar user={author} size="sm" />
              <Link to={`/profile/${author.username}`} className="feed-post-card__username">
                {author.username}
              </Link>
            </>
          ) : (
            <span className="feed-post-card__username">unknown</span>
          )}
          <span className="feed-post-card__time">{timeAgo(post.createdAt)}</span>
        </div>
        {onDelete && (
          <button className="btn btn--danger btn--sm" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>

      <p className="feed-post-card__content">{post.content}</p>

      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post image" className="feed-post-card__image" />
      )}

      {embedUrl && (
        <div className="feed-post-card__video">
          <iframe
            src={embedUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="feed-post-card__footer">
        <button
          className="feed-post-card__comment-toggle"
          onClick={() => setShowComments((v) => !v)}
        >
          💬 {post.comments.length > 0 ? `${post.comments.length} Comment${post.comments.length !== 1 ? 's' : ''}` : 'Comment'}
        </button>
      </div>

      {showComments && (
        <CommentSection comments={post.comments} onAddComment={onAddComment} />
      )}
    </article>
  );
}
