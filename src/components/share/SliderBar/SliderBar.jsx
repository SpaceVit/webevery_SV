import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import styles from './SliderBar.module.scss';

// import SliderBtn from './SliderBtn';
import dataSlider from './dataSlider';

const SliderBar = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  // const [linkTo, setLinkTo] = useState('')

  const moveIndex = index => setSlideIndex(index);

  const rightSlide = index => {
    moveIndex(index);
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const leftSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  console.log(slideIndex);
  return (
    <div className={styles.sliderContainer}>
      {dataSlider.map((obj, index) => {
        console.log('slider linkTo', obj.linkTo);
        return (
          <div key={index} className={slideIndex === index + 1 ? styles.activeDiv : styles.unactiveDiv}>
            <NavLink onClick={() => leftSlide()} to={obj.linkTo} className={slideIndex === index + 1 ? styles.sliderActiveBtn : styles.sliderUnactiveBtn}>
              <GoArrowLeft />
            </NavLink>
            <NavLink to={obj.linkTo} className={slideIndex === index + 1 ? styles.slideActiveLink : styles.slideLink}>
              {obj.linkText}
            </NavLink>
            <NavLink
              onClick={() => rightSlide(index + 1)}
              to={obj.linkTo}
              className={slideIndex === index + 1 ? styles.sliderActiveBtn : styles.sliderUnactiveBtn}
            >
              <GoArrowRight />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SliderBar;
