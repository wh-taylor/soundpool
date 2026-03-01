import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { JamCard } from '../components/JamCard';
import { CITIES } from '../data/cities';
import { GENRES } from '../data/genres';
import './JamsPage.css';
import { getArtistSimilarities, getGenreSimilarities, getSimilarity } from '../utils/similarity';

export function JamsPage() {
  const { users, currentUser } = useAuth();
  const genreSimilarity = getGenreSimilarities(users);
  const artistSimilarity = getArtistSimilarities(users);
  const visibleUsers = users.filter((u) => u.jamEntry?.visible)
    .sort((u1, u2) => getSimilarity(currentUser!, u2, genreSimilarity, artistSimilarity) - getSimilarity(currentUser!, u1, genreSimilarity, artistSimilarity));
  const currentUserVisible = currentUser?.jamEntry?.visible;
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');
  const [genreFilters, setGenreFilters] = useState<string[]>([]);

  function toggleGenre(g: string) {
    setGenreFilters((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  }

  const filtered = useMemo(() => {
    let list = users.filter((u) => u.jamEntry?.visible);
    if (locationFilter) list = list.filter((u) => u.location === locationFilter);
    if (genreFilters.length > 0) {
      list = list.filter((u) =>
        genreFilters.some((g) => u.favoriteGenres.includes(g))
      );
    }
    return list;
  }, [users, locationFilter, genreFilters]);
  console.log(visibleUsers.map((u) => getSimilarity(currentUser!, u, genreSimilarity, artistSimilarity)));

  return (
    <div className="page">
      <div className="jams-page__header">
        <h1 className="page-heading">Jams</h1>
      </div>
      <p className="jams-page__sub">
        Musicians available to connect — enable yours from your profile.
      </p>

      {!currentUserVisible && currentUser && (
        <div className="jams-page__banner">
          Your jam entry is hidden.{' '}
          <Link to={`/profile/${currentUser.username}`} className="jams-page__banner-link">
            Enable it on your profile →
          </Link>
        </div>
      )}

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

      <div className="page-filter-genre" style={{ marginBottom: 'var(--sp-xl)' }}>
        {GENRES.map((g) => (
          <button
            key={g}
            className={`page-filter-chip ${genreFilters.includes(g) ? 'active' : ''}`}
            onClick={() => toggleGenre(g)}
          >
            {g}
          </button>
        ))}
        {genreFilters.length > 0 && (
          <button className="btn btn--secondary btn--sm" onClick={() => setGenreFilters([])}>
            Clear Genres
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">No jam entries match your filters.</div>
      ) : (
        <div className="jams-page__grid">
          {filtered.map((u) => (
            <JamCard key={u.id} user={u} />
          ))}
        </div>
      )}
    </div>
  );
}
