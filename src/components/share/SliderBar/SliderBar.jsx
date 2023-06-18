import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SliderBar.module.scss';

import SliderBtn from './SliderBtn';
import dataSlider from './dataSlider';

const SliderBar = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const upSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const downSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <SliderBtn moveSlide={upSlide} direction={'up'} />
      {dataSlider.map((obj, index) => {
        return (
          <NavLink key={obj.id} to={obj.linkTo} className={slideIndex === index + 1 ? styles.slideActiveLink : styles.slideLink}>
            {obj.linkText}
          </NavLink>
        );
      })}
      <SliderBtn moveSlide={downSlide} direction={'down'} />
    </div>
  );
};

export default SliderBar;
