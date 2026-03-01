import { Link } from 'react-router-dom';
import { formatShowDate, timeAgo } from '../utils/dateUtils';
import type { Show } from '../types';
import './ShowCard.css';

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <Link to={`/shows/${show.id}`} className="show-card panel" aria-label={show.title}>
      <div className="show-card__flyer">
        <img src={show.flyerUrl} alt={show.title} className="show-card__flyer-img" />
      </div>
      <div className="show-card__info">
        <div className="show-card__badges">
          <span className="tag tag--show">Show</span>
          <span className="tag tag--age">{show.ageRestriction}</span>
        </div>
        <h3 className="show-card__title">{show.title}</h3>
        <div className="show-card__date">{formatShowDate(show.date)}</div>
        <div className="show-card__city">{show.city}</div>
        <div className="show-card__venue">@{show.venueInstagram}</div>
        <div className="show-card__posted">Posted {timeAgo(show.createdAt)}</div>
      </div>
    </Link>
  );
}
