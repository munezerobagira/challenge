import Image from 'next/image';
import { useState } from 'react';
import useSlider from '../../../../hooks/useSlider';
import { imageObject } from '../../../../interfaces/hotel';
import sliderStyles from './slider.module.scss';
interface SliderProps {
  images: imageObject[];
}
function Slider({ images }: SliderProps) {
  const { activeItem, nextHandler, previousHandler } = useSlider<{ url: string; hash: string; altText: string }>(
    images || []
  );

  if (!images) return null;
  return (
    <div className={sliderStyles.slides}>
      {activeItem > 0 && (
        <button
          className={`${sliderStyles.slides_button} ${sliderStyles.slides_button__prev}`}
          onClick={previousHandler}
        >
          ❮
        </button>
      )}
      {activeItem < images?.length - 1 && (
        <button className={`${sliderStyles.slides_button} ${sliderStyles.slides_button__next}`} onClick={nextHandler}>
          ❯
        </button>
      )}
      <div className={sliderStyles.slider_imgcontainer}>
        {images.map((image, key) => (
          <div
            className={`${activeItem == key ? sliderStyles.slides_slide : sliderStyles.slides_slide__hidden}`}
            key={key}
          >
            <Image src={image.url} alt={image.altText} fill={true} blurDataURL={image.hash} placeholder="blur" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
