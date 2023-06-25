// import React from 'react';
// import styles from './SliderBar.module.scss';

// import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

// const SliderBtn = ({ moveSlide, direction }) => {
//   return (
//     <button onClick={moveSlide} className={styles.sliderBtn}>
//       {direction === 'left' ? <GoArrowLeft /> : <GoArrowRight />}
//     </button>
//   );
// };

// export default SliderBtn;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SliderBar.module.scss';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const SliderBtn = ({ moveSlide, direction, linkTo, active }) => {
  console.log('btn linkTo', linkTo);
  return (
    <NavLink onClick={moveSlide} className={active ? styles.sliderActiveBtn : styles.sliderUnactiveBtn} to={linkTo}>
      {direction === 'left' ? <GoArrowLeft /> : <GoArrowRight />}
    </NavLink>
  );
};

export default SliderBtn;
