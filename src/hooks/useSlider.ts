import { useState } from 'react';

const useSlider = <T>(items: T[]) => {
  const [activeItem, setActiveItem] = useState(0);
  const nextHandler = () =>
    setActiveItem((previous) => {
      if (!items) return 0;
      if (previous + 1 >= items?.length) return 0;
      return previous + 1;
    });
  const previousHandler = () =>
    setActiveItem((previous) => {
      if (!items) return 0;
      if (previous - 1 < 0) return items.length - 1;
      return previous - 1;
    });
  const selectHandler = (number: number) => {
    setActiveItem((previous) => {
      if (!items) return 0;
      if (number < 0) return items.length - 1;
      if (number >= items?.length) return 0;
      return number;
    });
  };
  return { nextHandler, previousHandler, activeItem, selectHandler };
};
export default useSlider;
