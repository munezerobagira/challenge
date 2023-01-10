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
        <Card hotel={hotel} key={hotel?.id || key} />
      ))}
    </div>
  );
}

export default Hotels;
