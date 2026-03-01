import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { BandRow } from '../components/BandRow';
import { CreateBandModal } from '../components/CreateBandModal';
import { CITIES } from '../data/cities';
import { GENRES } from '../data/genres';
import './BandsPage.css';

export function BandsPage() {
  const { bands } = useApp();
  const { currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');
  const [genreFilters, setGenreFilters] = useState<string[]>([]);

  function toggleGenre(g: string) {
    setGenreFilters((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  }

  const filtered = useMemo(() => {
    let list = [...bands];
    if (locationFilter) list = list.filter((b) => b.location === locationFilter);
    if (genreFilters.length > 0) {
      list = list.filter((b) =>
        genreFilters.some((g) => b.genres.includes(g))
      );
    }
    return list;
  }, [bands, locationFilter, genreFilters]);

  return (
    <div className="page">
      <div className="bands-page__header">
        <h1 className="page-heading">Bands</h1>
        <button className="btn btn--cyan" onClick={() => setModalOpen(true)}>
          + Post Band
        </button>
      </div>
      <p className="bands-page__sub">Discover bands, join one, or post your own.</p>

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
        <div className="empty-state">No bands match your filters.</div>
      ) : (
        <div className="bands-page__list">
          {filtered.map((band) => (
            <BandRow key={band.id} band={band} />
          ))}
        </div>
      )}

      {modalOpen && <CreateBandModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
