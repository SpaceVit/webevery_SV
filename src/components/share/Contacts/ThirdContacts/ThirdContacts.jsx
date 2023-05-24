import React from 'react';

import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import styles from './ThirdContacts.module.scss';

const ThirdContacts = () => {
  return (
    <>
      <div className={styles.contactsBox}>
        <a className={styles.contactsText} href="mailto:webforevery@gmail.com">
          webforevery@gmail.com
        </a>
        <ul className={styles.socialsBox}>
          <li>
            <a
              className={styles.contactsText}
              href="https://www.instagram.com/web.every/"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              className={styles.contactsText}
              href="https://www.facebook.com/profile.php?id=100092267193984"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a className={styles.contactsText} href="instagram.com">
              <BsTelegram />
            </a>
          </li>
        </ul>
        <a className={styles.contactsText} href="tel:+380966058605">
          +380966058605
        </a>
      </div>
    </>
  );
};

export default ThirdContacts;
