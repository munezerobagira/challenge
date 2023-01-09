import hotel from '../../interfaces/hotel';
import hotelStyles from './hotels.module.scss';
import Card from './Card/Card';
import Link from 'next/link';

export interface HotelsProps {
  hotels: (hotel | null)[];
}
function Hotels({ hotels }: HotelsProps) {
  return (
    <div className={`${hotelStyles.hotels}`}>
      {hotels.map((hotel, key) => (
        <Link href={`/hotel/${hotel?.id}`} key={hotel?.id || key}>
          <Card hotel={hotel} />
        </Link>
      ))}
    </div>
  );
}

export default Hotels;
