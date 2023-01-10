import Image from 'next/image';
import React from 'react';
import HotelInterface from '../../interfaces/hotel';
import { Skeleton } from '../Common';
import hotelStyles from './Hotel.module.scss';
interface HotelProps {
  hotel: HotelInterface | null;
}

function Hotel({ hotel }: HotelProps) {
  if (!hotel)
    return (
      <div className="container">
        <Skeleton height={20} width="80%" className="my-2" />
        <div className="flex flex-row justify-between">
          <Skeleton height={20} width="50%" className="my-2" />
          <div>
            <Skeleton height={20} width="20%" className="my-2" />
            <Skeleton height={20} width="20%" className="my-2" />
          </div>
        </div>

        <div className={hotelStyles.grid}>
          {[400, 180, 180, 180, 180].map((value, key) => {
            return <Skeleton key={key} height="auto" width="100%" className={hotelStyles.grid_item} />;
          })}
        </div>
      </div>
    );
  if (!hotel)
    return (
      <div className="container">
        <h1>Hotel was not found</h1>
      </div>
    );
  return (
    <div className="container">
      <h1 className="my-2">{hotel.name}</h1>
      <div className={hotelStyles.grid}>
        {hotel.images.map(({ url, altText, hash }, key) => {
          return (
            <div key={key} className={hotelStyles.grid_item}>
              <Image src={url} alt={altText} blurDataURL={hash} placeholder="blur" fill={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotel;
