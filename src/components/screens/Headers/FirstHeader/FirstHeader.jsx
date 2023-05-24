import React from 'react';
import styles from './FirstHeader.module.scss';

import FirstLogo from 'components/share/Logoes/FirstLogo/FirstLogo';

const FirstHeader = () => {
  return (
    <>
      <div className={styles.titleNav}>
        <FirstLogo />
      </div>
    </>
  );
};

export default FirstHeader;
