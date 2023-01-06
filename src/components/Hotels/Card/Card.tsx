import hotel from '../../../interfaces/hotel';
import cardStyles from './card.module.scss';
import Slider from './Slider/Slider';
export interface CardProps {
  hotel: hotel | null;
}
function Card({ hotel }: CardProps) {
  return (
    <div className={`${cardStyles.card}${!hotel ? '' : ''}`}>
      <Slider images={hotel?.images} />
    </div>
  );
}

export default Card;
