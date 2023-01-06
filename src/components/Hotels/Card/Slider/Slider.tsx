import { useState } from 'react';
import sliderStyles from './slider.module.scss';
interface SliderProps {
  images: string[] | undefined;
}
function Slider({ images }: SliderProps) {
  const [activeImage, setActiveImage] = useState(0);
  const nextHandler = () =>
    setActiveImage((previous) => {
      if (!images) return 0;
      if (previous + 1 >= images?.length) return 0;
      return previous + 1;
    });
  const previousHandler = () =>
    setActiveImage((previous) => {
      if (!images) return 0;
      if (previous - 1 < 0) return images.length - 1;
      return previous - 1;
    });
  if (!images) return null;
  return (
    <div className={sliderStyles.slider}>
      {activeImage > 0 && <button onClick={previousHandler}>&lte;</button>}
      {activeImage < images?.length - 1 && <button onClick={nextHandler}>&gte;</button>}
      {images.map((image, key) => (
        <img
          className={`${activeImage == key ? sliderStyles.slider_image : sliderStyles.slider_image__hidden}`}
          key={key}
          src={image}
          alt={image}
        />
      ))}
    </div>
  );
}

export default Slider;
