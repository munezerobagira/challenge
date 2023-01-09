import Header from '../components/Header/Header';
import HTMLHead from '../components/Common/HTMLHead';
import Hotels from '../components/Home/Hotels';
import { useRef } from 'react';
import Observer from '../components/Home/Observer';
import { useHotelInfiniteScroll } from '../hooks';

export default function Home() {
  const ref = useRef(null);
  const { hotels, isFetching } = useHotelInfiniteScroll(ref);
  return (
    <>
      <HTMLHead title="Hotel&co" description="Hotel reservation website" />
      <Header title="This is top header" link="/about" />
      <Hotels hotels={hotels} />
      <Observer target={ref} className="text-center">
        {isFetching ? 'Loading more' : 'You have reached the footer'}
      </Observer>
    </>
  );
}
