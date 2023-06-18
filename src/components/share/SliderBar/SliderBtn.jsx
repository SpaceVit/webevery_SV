import React from 'react';
import styles from './SliderBar.module.scss';

import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';

const SliderBtn = ({ moveSlide, direction }) => {
  console.log(moveSlide, direction);
  return (
    <button onClick={moveSlide} className={direction === 'up' ? styles.sliderBtnUp : styles.sliderBtnDown}>
      {direction === 'up' ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
    </button>
  );
};

export default SliderBtn;
