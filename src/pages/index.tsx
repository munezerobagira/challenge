import Header from '../components/Header/Header';
import HTMLHead from '../components/Common/HTMLHead';
import Hotels from '../components/Hotels/Hotels';
import { useContext } from 'react';
import { storeContext } from '../store/StoreProvider';
import { useQuery } from '@tanstack/react-query';
import config from '../constants/config';
import { SET_HOTELS } from '../store/reducer';

export default function Home() {
  const { hotels, dispatch } = useContext(storeContext);
  const { isLoading, error } = useQuery(['hotels'], () => {
    return fetch(`${config.baseAPI}/hotels`).then(async (res) => {
      const data = await res.json();
      dispatch({ type: SET_HOTELS, value: data });
    });
  });
  if (isLoading) return <h1>Loadding ...</h1>;

  return (
    <>
      <HTMLHead title="Hotel&co" description="Hotel reservation website" />
      <Header title="Show total prices" link="/totalprice" />
      <Hotels hotels={hotels} />
    </>
  );
}
