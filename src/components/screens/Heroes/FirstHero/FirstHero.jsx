import React from 'react';
import Slogan from 'components/share/Slogan/Slogan';
import FirstSubSlogan from 'components/share/SubSlogans/FirstSubSlogan/FirstSubSlogan';

import styles from './FirstHero.module.scss';

const FirstHero = () => {
  return (
    <>
      <div className={styles.wrapperHero}>
        <Slogan />
        <FirstSubSlogan />
      </div>
    </>
  );
};

export default FirstHero;
