import hotel from '../../../interfaces/hotel';
import Slider from './Slider/Slider';
import formatDateRange from '../../../util/formatDateRange';

import cardStyles from './card.module.scss';
import { Skeleton } from '../../Common';
export interface CardProps {
  hotel: hotel | null;
}
function Card({ hotel }: CardProps) {
  if (!hotel)
    return (
      <div className={`${cardStyles.card}`}>
        <div className="px-2">
          <Skeleton height={250} width="100%" className="rounded-lg" />
          <Skeleton height={25} width="100%" className="my-2 rounded-md" />
          <Skeleton height={25} width="100%" className="rounded-md" />
        </div>
      </div>
    );
  return (
    <div className={`${cardStyles.card}${!hotel ? '' : ''}`}>
      <Slider images={hotel.images} />
      <div className="px-2">
        <h3>{hotel?.name}</h3>
        <p>{formatDateRange(hotel.availability.start, hotel.availability.end)}</p>
        <p>
          <span className="font-bold">{hotel.price}</span> night
        </p>
      </div>
    </div>
  );
}

export default Card;
