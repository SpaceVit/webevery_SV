import React from 'react';
import Slogan from 'components/share/Slogan/Slogan';
import SecondSubSlogan from 'components/share/SubSlogans/SecondSubSLogan/SecondSubSlogan';
import NbCircles from '../../../sections/NbCircles/NbCircles';

import styles from './SecondHero.module.scss';

const SecondHero = () => {
  return (
    <>
      <div className={styles.wrapperHero}>
        <Slogan />
        <SecondSubSlogan />
        <NbCircles />
      </div>
    </>
  );
};

export default SecondHero;
