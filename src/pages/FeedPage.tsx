import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { FeedPostCard } from '../components/FeedPostCard';
import { CreatePostModal } from '../components/CreatePostModal';
import { CITIES } from '../data/cities';
import type { Comment } from '../types';
import './FeedPage.css';

export function FeedPage() {
  const { feedPosts, deleteFeedPost, addCommentToFeedPost } = useApp();
  const { currentUser } = useAuth();
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');

  const filtered = useMemo(() => {
    const posts = locationFilter
      ? feedPosts.filter((p) => p.location === locationFilter)
      : feedPosts;
    return [...posts].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [feedPosts, locationFilter]);

  function makeAddComment(postId: string) {
    return (content: string) => {
      if (!currentUser) return;
      const comment: Comment = {
        id: crypto.randomUUID(),
        authorId: currentUser.id,
        content,
        createdAt: new Date().toISOString(),
      };
      addCommentToFeedPost(postId, comment);
    };
  }

  return (
    <div className="page">
      <div className="feed-page__composer">
        <button className="feed-page__compose-btn" onClick={() => setPostModalOpen(true)}>
          <span className="feed-page__compose-placeholder">What's happening in the scene?</span>
          <span className="btn btn--sm">Post</span>
        </button>
      </div>

      <div className="feed-page__filters">
        <select
          className="feed-page__filter-select"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {(!locationFilter || locationFilter !== currentUser?.location) && (
          <button
            className="btn btn--secondary btn--sm"
            onClick={() => setLocationFilter(currentUser?.location ?? '')}
          >
            My City
          </button>
        )}
        {locationFilter && (
          <button
            className="btn btn--secondary btn--sm"
            onClick={() => setLocationFilter('')}
          >
            Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {locationFilter
            ? `No posts from ${locationFilter} yet.`
            : 'The feed is empty. Be the first to post!'}
        </div>
      ) : (
        <div className="feed-page__list">
          {filtered.map((post) => (
            <FeedPostCard
              key={post.id}
              post={post}
              onDelete={currentUser?.id === post.authorId ? () => deleteFeedPost(post.id) : undefined}
              onAddComment={makeAddComment(post.id)}
            />
          ))}
        </div>
      )}

      {postModalOpen && <CreatePostModal onClose={() => setPostModalOpen(false)} />}
    </div>
  );
}
