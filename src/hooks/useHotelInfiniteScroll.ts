import { useInfiniteQuery } from '@tanstack/react-query';
import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import config from '../constants/config';
import { ADD_HOTELS, ADD_SKELETON_HOTELS } from '../store/reducer';
import { storeContext } from '../store/StoreProvider';

export default function useHotelInfiniteScroll(ref: RefObject<null>) {
  const [isVisible, setIsVisible] = useState(false);
  const { hotels, dispatch } = useContext(storeContext);
  const { fetchNextPage, isFetching } = useInfiniteQuery(
    ['hotels'],
    async ({ pageParam = 1 }) => {
      dispatch({ type: ADD_SKELETON_HOTELS, value: 12 });
      const res = await fetch(`${config.baseAPI}/hotels?page=${pageParam}&limit=12`);
      const data = await res.json();
      dispatch({ type: ADD_HOTELS, value: data });
      return data;
    },
    {}
  );
  const observerCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(observerCallback, {});
    if (observer == null) setObserver(intersectionObserver);
    if (ref.current) observer?.observe(ref.current);
    return () => {
      if (ref.current) observer?.unobserve(ref.current);
    };
  }, [observer]);
  useEffect(() => {
    if (isVisible && !isFetching)
      (async () => {
        const { data } = await fetchNextPage({
          pageParam: hotels.length / 12 + 1,
        });
        console.log(data);
        if (data?.pages[data.pages.length - 1].length == 0) if (ref.current) observer?.unobserve(ref.current);
      })();
  }, [isVisible]);
  return { hotels, isFetching, isVisible, setIsVisible };
}
