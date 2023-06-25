import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import styles from './SliderBar.module.scss';

// import SliderBtn from './SliderBtn';
import dataSlider from './dataSlider';

const SliderBar = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const [linkTo, setLinkTo] = useState('')

  // const moveIndex = index => setSlideIndex(index);

  const rightSlide = () => {
    if (slideIndex !== dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else setSlideIndex(0);
  };

  const leftSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else setSlideIndex(dataSlider.length - 1);
  };

  // console.log(slideIndex);
  return (
    <div className={styles.sliderContainer}>
      {dataSlider.map((obj, index) => {
        // console.log('slider linkTo', obj.linkTo);
        return (
          <div key={index} className={slideIndex === index ? styles.activeDiv : styles.unactiveDiv}>
            <NavLink onClick={() => leftSlide()} to={obj.linkPrev} className={slideIndex === index ? styles.sliderActiveBtn : styles.sliderUnactiveBtn}>
              <GoArrowLeft />
            </NavLink>
            <NavLink to={obj.linkTo} className={slideIndex === index ? styles.slideActiveLink : styles.slideLink}>
              {obj.linkText}
            </NavLink>
            <NavLink
              onClick={() => rightSlide()}
              to={obj.linkNext}
              className={slideIndex === index ? styles.sliderActiveBtn : styles.sliderUnactiveBtn}
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
