import { HotelsProps } from '../../src/components/Home/Hotels';
import Hotel from '../../src/interfaces/hotel';
import reducer, { ADD_HOTELS, ADD_SKELETON_HOTELS, SET_HOTELS } from '../../src/store/reducer';
import { StoreStateType } from '../../src/store/StoreProvider';

describe('reducer', () => {
  const initialState: StoreStateType = { hotels: [], dispatch: () => {} };

  it('should have the initial state', () => {
    const action = { type: 'UNKNOWN', value: '' };
    const newState = reducer(undefined, action);
    expect(newState.hotels).toEqual([]);
    expect(newState.dispatch()).toBeUndefined();
  });
  it('should set the hotels when the action type is SET_HOTELS and the value is an array', () => {
    const hotels: Hotel[] = [
      {
        id: '1',
        createdAt: new Date(),
        name: 'Test Hotel',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const action = { type: SET_HOTELS, value: hotels };
    const newState = reducer(initialState, action);
    expect(newState.hotels).toEqual(hotels);
    expect(newState.dispatch()).toBeUndefined();
  });

  it('should set the hotels to an empty array when the action type is SET_HOTELS and the value is not an array', () => {
    const action = { type: SET_HOTELS, value: 'invalid value' };
    const newState = reducer(initialState, action);
    expect(newState.hotels).toEqual([]);
  });

  it('should add skeleton hotels to the hotels array when the action type is ADD_SKELETON_HOTELS and the value is a number', () => {
    const hotels: Hotel[] = [
      {
        id: '1',
        createdAt: new Date(),
        name: 'Test Hotel',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const action = { type: ADD_SKELETON_HOTELS, value: '12' };
    const newState = reducer({ ...initialState, hotels }, action);
    expect(newState.hotels).toHaveLength(13);
    expect(newState.hotels[12]).toBeNull();
  });

  it('should not add skeleton hotels to the hotels array when the action type is ADD_SKELETON_HOTELS and the value is not a number', () => {
    const hotels: Hotel[] = [
      {
        id: '1',
        createdAt: new Date(),
        name: 'Test Hotel',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const action = { type: ADD_SKELETON_HOTELS, value: 'invalid value' };
    const newState = reducer({ ...initialState, hotels }, action);
    expect(newState.hotels).toHaveLength(1);
    expect(newState.hotels[0]).toEqual(hotels[0]);
  });

  it('should add hotels to the hotels array when the action type is ADD_HOTELS and the value is an array', () => {
    const hotels: Hotel[] = [
      {
        id: '1',
        createdAt: new Date(),
        name: 'Test Hotel',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const moreHotels: Hotel[] = [
      {
        id: '2',
        createdAt: new Date(),
        name: 'Test Hotel 2',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const action = { type: ADD_HOTELS, value: moreHotels };
    const newState = reducer({ ...initialState, hotels }, action);
    expect(newState.hotels).toHaveLength(2);
    expect(newState.hotels[1]).toEqual(moreHotels[0]);
  });

  it('should not add hotels to the hotels array when the action type is ADD_HOTELS and the value is not an array', () => {
    const hotels: Hotel[] = [
      {
        id: '1',
        createdAt: new Date(),
        name: 'Test Hotel',
        images: [],
        shortLocation: 'Test Location',
        size: '',
        price: 0,
        availability: { start: '', end: '' },
      },
    ];
    const action = { type: ADD_HOTELS, value: 'invalid value' };
    const newState = reducer({ ...initialState, hotels }, action);
    expect(newState.hotels).toEqual(hotels);
  });

  it('should return the initial state when the action type is not recognized', () => {
    const action = { type: 'UNKNOWN_ACTION', value: 'invalid value' };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
  it('should return dipatch value', () => {
    const action = { type: 'UNKNOWN_ACTION', value: 'invalid value' };
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
