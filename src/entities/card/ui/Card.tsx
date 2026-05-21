import type { CardProps } from '../model/types';
import './Card.css';

export function Card({
  title,
  description,
  imageUrl,
  onDetailsClick,
  isDelailsVisible = false,
}: CardProps) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__footer">
          <button
            className="card__button"
            onClick={onDetailsClick}
            aria-label={`Подробнее о: ${title}`}
          >
            {isDelailsVisible ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
      </div>
    </div>
  );
}
