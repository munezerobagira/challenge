import { createContext, useReducer } from 'react';

import hotel from '../interfaces/hotel';
import reducer from './reducer';

export interface StoreStateType {
  hotels: hotel[] | null[];
  dispatch: Function;
}

interface providerProps {
  children: JSX.Element | JSX.Element[];
}
export const defaultStore: StoreStateType = {
  hotels: [null, null, null, null, null, null, null, null, null, null, null, null],
  dispatch: () => {},
};

export const storeContext = createContext(defaultStore);

function StoreProvider({ children }: providerProps) {
  const [store, dispatch] = useReducer(reducer, defaultStore);
  return <storeContext.Provider value={{ ...store, dispatch }}>{children}</storeContext.Provider>;
}

export default StoreProvider;
