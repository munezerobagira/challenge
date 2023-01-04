import hotel from '../../interfaces/hotel';
import hotelStyles from './hotels.module.scss';
import Card from './Card/Card';

export interface HotelsProps {
  hotels: hotel[];
}
function Hotels({ hotels }: HotelsProps) {
  return (
    <div className={`${hotelStyles.hotels}`}>
      {hotels.map((hotel) => (
        <Card key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
