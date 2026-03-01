import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ShowCard } from '../components/ShowCard';
import { CreateShowModal } from '../components/CreateShowModal';
import { CITIES } from '../data/cities';
import './ShowsPage.css';

export function ShowsPage() {
  const { shows } = useApp();
  const { currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState(currentUser?.location ?? '');

  const filtered = useMemo(() => {
    let list = locationFilter
      ? shows.filter((s) => s.city === locationFilter)
      : shows;
    return [...list].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [shows, locationFilter]);

  return (
    <div className="page">
      <div className="shows-page__header">
        <h1 className="page-heading">Shows</h1>
        <button className="btn btn--lime" onClick={() => setModalOpen(true)}>
          + Post Show
        </button>
      </div>
      <p className="shows-page__sub">Upcoming shows and events in the scene.</p>

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
            Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {locationFilter ? `No shows in ${locationFilter} yet.` : 'No shows posted yet.'}
        </div>
      ) : (
        <div className="shows-page__grid">
          {filtered.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}

      {modalOpen && <CreateShowModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
