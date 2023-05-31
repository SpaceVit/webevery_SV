import React from 'react';

import ThirdLogo from 'components/share/Logoes/ThirdLogo/ThirdLogo';
import ThirdContacts from 'components/share/Contacts/ThirdContacts/ThirdContacts';

import styles from './ThirdHeader.module.scss';

const ThirdHeader = () => {
  return (
    <>
      <div className={styles.headerBox}>
        <ThirdLogo size={styles.logoSize} />
        <h1 className={styles.titleNav}>W e b e v e r y</h1>
        <ThirdContacts
          contactsBox={styles.contactsBox}
          contactsText={styles.contactsText}
          socialsBox={styles.socialsBox}
          socialsIcon={styles.socialsIcon}
        />
      </div>
    </>
  );
};

export default ThirdHeader;
