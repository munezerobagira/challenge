import hotel from '../../interfaces/hotel';
import { defaultStore, StoreStateType } from '../StoreProvider';

export const SET_HOTELS = 'SET_HOTELS';
export const ADD_HOTELS = 'ADD_HOTELS';
export default function reducer(
  state: StoreStateType = { hotels: [], dispatch: () => {} },
  action: { type: string; value: string | hotel[] | Object }
): StoreStateType {
  switch (action.type) {
    case SET_HOTELS:
      let hotels: hotel[] = [];
      if (Array.isArray(action.value)) hotels = action.value;
      return { ...state, hotels };
    case ADD_HOTELS:
      let allHotels = [...state.hotels];
      if (Array.isArray(action.value)) allHotels = [...state.hotels, ...action.value];
      return { ...state, hotels: allHotels };
    default:
      return state;
  }
}
