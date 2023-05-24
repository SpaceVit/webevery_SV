import React from 'react';
import Slogan from 'components/share/Slogan/Slogan';
import SecondSubSlogan from 'components/share/SubSlogans/SecondSubSLogan/SecondSubSlogan';

import styles from './SecondHero.module.scss';

const SecondHero = () => {
  return (
    <>
      <div className={styles.wrapperHero}>
        <Slogan />
        <SecondSubSlogan />
      </div>
    </>
  );
};

export default SecondHero;
