import { renderHook } from '@testing-library/react';
import { useSlider } from '../../../src/hooks';

describe('useSlider', () => {
  it('increments the active item when the active item is not the last item in the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, nextHandler },
      },
    } = renderHook(() => useSlider(items));
    nextHandler();
    expect(activeItem).toEqual(1);
  });

  it('sets the active item to 0 when the active item is the last item in the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, nextHandler },
      },
    } = renderHook(() => useSlider(items));
    nextHandler();
    nextHandler();
    nextHandler();
    expect(activeItem).toEqual(0);
  });

  it('decrements the active item when the active item is not the first item in the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, previousHandler },
      },
    } = renderHook(() => useSlider(items));
    previousHandler();
    expect(activeItem).toEqual(2);
  });

  it('sets the active item to the last item in the list when the active item is the first item in the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, previousHandler },
      },
    } = renderHook(() => useSlider(items));
    previousHandler();
    previousHandler();
    expect(activeItem).toEqual(2);
  });

  it('sets the active item to the selected item when the selected item is within the bounds of the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, selectHandler },
      },
    } = renderHook(() => useSlider(items));
    selectHandler(1);
    expect(activeItem).toEqual(1);
  });

  it('sets the active item to the last item in the list when the selected item is less than 0', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, selectHandler },
      },
    } = renderHook(() => useSlider(items));
    selectHandler(-1);
    expect(activeItem).toEqual(2);
  });

  it('sets the active item to 0 when the selected item is greater than or equal to the length of the list', () => {
    const items = [1, 2, 3];
    const {
      result: {
        current: { activeItem, selectHandler },
      },
    } = renderHook(() => useSlider(items));
    selectHandler(4);
    expect(activeItem).toEqual(0);
  });
  it('sets the active item to -1 when number of item is not provided', () => {
    const items = null;
    const {
      result: {
        current: { activeItem, selectHandler },
      },
    } = renderHook(() => useSlider(items));
    selectHandler(4);
    expect(activeItem).toEqual(0);
  });
});
