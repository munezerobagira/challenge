import Router, { useRouter } from 'next/router';
import React from 'react';

import config from '../../constants/config';
import HotelInterface from '../../interfaces/hotel';

import { useQuery } from '@tanstack/react-query';

import Hotel from '../../components/hotel/Hotel';

function HotelPage() {
  const router = useRouter();
  const hotelId = typeof router.query?.id === 'string' ? router.query.id : '';
  const { isLoading, data: hotel } = useQuery<HotelInterface>(['getHotel', hotelId], async () => {
    const res = await fetch(`${config.baseAPI}/hotels/${router.query?.id}`);
    const data = await res.json();
    return data;
  });
  if (isLoading) return <Hotel hotel={null} />;
  if (!hotel?.images)
    return (
      <div className="container text-center">
        <h2 className="mt-10">Hotel was not found </h2>
      </div>
    );
  return <Hotel hotel={hotel} />;
}

export default HotelPage;
