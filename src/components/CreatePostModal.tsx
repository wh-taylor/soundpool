import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { compressImage } from '../utils/imageUtils';
import { isVideoUrl } from '../utils/videoUtils';
import type { FeedPost } from '../types';

interface CreatePostModalProps {
  onClose: () => void;
}

export function CreatePostModal({ onClose }: CreatePostModalProps) {
  const { currentUser } = useAuth();
  const { addFeedPost } = useApp();
  const [content, setContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageData, setImageData] = useState('');
  const [error, setError] = useState('');

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImage(file, 1200, 0.75);
      setImageData(compressed);
      setImagePreview(compressed);
    } catch {
      setError('Failed to process image.');
    }
  }

  function handleSubmit(e: React.FormEvent) {
    setError('');
    e.preventDefault();
    if (!currentUser) return;
    if (!content.trim()) { setError('Add some text to your post.'); return; }
    if (videoUrl && !isVideoUrl(videoUrl)) {
      setError('Invalid video URL. Paste a YouTube or Vimeo link.');
      return;
    }

    const post: FeedPost = {
      id: crypto.randomUUID(),
      authorId: currentUser.id,
      content: content.trim(),
      location: currentUser.location,
      videoUrl: videoUrl.trim() || undefined,
      imageUrl: imageData || undefined,
      createdAt: new Date().toISOString(),
      comments: [],
    };
    addFeedPost(post);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-box__title">New Post</div>
        <button className="modal-box__close" onClick={onClose} aria-label="Close">✕</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="post-content">What's on your mind?</label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share something with the community..."
              rows={4}
              maxLength={2000}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post-video">Video URL (YouTube or Vimeo, optional)</label>
            <input
              id="post-video"
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="post-image">Image (optional)</label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: '100%', maxHeight: 200, objectFit: 'cover', marginBottom: 8, border: '1px solid var(--border)' }}
              />
            )}
            <input id="post-image" type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          {error && <p className="form-error">{error}</p>}
          <div className="form-actions">
            <button type="button" className="btn btn--secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
