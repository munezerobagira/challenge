import hotel from '../../../interfaces/hotel';
import cardStyles from './card.module.scss';
export interface CardProps {
  hotel: hotel;
}
function Card({ hotel }: CardProps) {
  return <div className={cardStyles.card}>Card</div>;
}

export default Card;
