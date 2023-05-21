import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSV from './LogoSV.png';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import styles from './ThirdHeader.module.scss';

const ThirdHeader = () => {
  return (
    <>
      <div className={styles.headerBox}>
        <NavLink to={`/`}>
          <img src={LogoSV} alt="Работа" width={160} height={160} />
        </NavLink>
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

export default ThirdHeader;
