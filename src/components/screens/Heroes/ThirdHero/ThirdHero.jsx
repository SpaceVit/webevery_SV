import React from 'react';
import Slogan from 'components/share/Slogan/Slogan';
import ThirdSubSlogan from 'components/share/SubSlogans/ThirdSubSlogan/ThirdSubSlogan';

import styles from './ThirdHero.module.scss';

const ThirdHero = () => {
  return (
    <>
      <div className={styles.wrapperHero}>
        <Slogan />
        <ThirdSubSlogan />
      </div>
    </>
  );
};

export default ThirdHero;
