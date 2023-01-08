import { useQuery } from '@tanstack/react-query';
import config from '../constants/config';
import { SET_HOTELS } from '../store/reducer';
export interface useHotelsParams {
  dispatch: Function;
  page: number;
  limit: number;
}
export function useHotels({ dispatch, page = 0, limit = 10 }: useHotelsParams) {
  return useQuery(['hotels'], () => {
    return fetch(`${config.baseAPI}/hotels?page=${page}&limit=${limit}`).then(async (res) => {
      const data = await res.json();
      dispatch({ type: SET_HOTELS, value: data });
    });
  });
}
