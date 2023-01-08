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
  const setNumberIndex = (number: number) => {
    setActiveImage((previous) => {
      if (!images) return 0;
      if (number < 0) return images.length - 1;
      if (number >= images?.length) return 0;
      return number;
    });
  };
  if (!images) return null;
  return (
    <div className={sliderStyles.slider}>
      <div className={sliderStyles.slider_imgcontainer}>
        {activeImage > 0 && (
          <button
            className={`${sliderStyles.slider_button} ${sliderStyles.slider_button__prev}`}
            onClick={previousHandler}
          >
            ❮
          </button>
        )}
        {activeImage < images?.length - 1 && (
          <button className={`${sliderStyles.slider_button} ${sliderStyles.slider_button__next}`} onClick={nextHandler}>
            ❯
          </button>
        )}
        {images.map((image, key) => (
          <img
            className={`${activeImage == key ? sliderStyles.slider_image : sliderStyles.slider_image__hidden}`}
            key={key}
            src={image}
            alt={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
