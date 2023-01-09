import hotel from '../../interfaces/hotel';
import { StoreStateType } from '../StoreProvider';

export const SET_HOTELS = 'SET_HOTELS';
export const ADD_HOTELS = 'ADD_HOTELS';
export const ADD_SKELETON_HOTELS = 'ADD_SKELETON_HOTELS';
export default function reducer(
  state: StoreStateType = { hotels: [], dispatch: () => {} },
  action: { type: string; value: string | hotel[] | Object }
): StoreStateType {
  let allHotels = state.hotels;

  switch (action.type) {
    case SET_HOTELS:
      let hotels: hotel[] = [];
      if (Array.isArray(action.value)) hotels = action.value;
      return { ...state, hotels };

    case ADD_SKELETON_HOTELS:
      allHotels = state.hotels.filter((hotel) => hotel != null);
      let skeletonLength = 12;
      if (typeof action.value == 'string') {
        skeletonLength = parseInt(action.value);
        if (isNaN(skeletonLength)) skeletonLength = 0;
      }
      allHotels = [...allHotels, ...Array.from({ length: skeletonLength }, () => null)];
      return { ...state, hotels: allHotels };

    case ADD_HOTELS:
      allHotels = state.hotels.filter((hotel) => hotel != null);
      if (Array.isArray(action.value)) allHotels = [...allHotels, ...action.value];
      return { ...state, hotels: allHotels };

    default:
      return state;
  }
}
