import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import SecondLogo from 'components/share/Logoes/SecondLogo/SecondLogo';

import styles from './SecondHeader.module.scss';

const SecondHeader = () => {
  return (
    <>
      <div className={styles.headerBox}>
        <SecondLogo />
        <h1 className={styles.titleNav}>Webevery</h1>
        <div className={styles.contactsBox}>
          <a href="mailto:webforevery@gmail.com">webforevery@gmail.com</a>
          <ul className={styles.socialsBox}>
            <li>
              <a href="instagram.com">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="instagram.com">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="instagram.com">
                <BsTelegram />
              </a>
            </li>
          </ul>
          <a href="tel:+380966058605">+380966058605</a>
        </div>
      </div>
    </>
  );
};

export default SecondHeader;
