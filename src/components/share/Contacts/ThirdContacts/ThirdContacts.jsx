import React from 'react';

import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

const ThirdContacts = ({
  contactsBox,
  contactsText,
  socialsBox,
  socialsIcon,
}) => {
  return (
    <>
      <div className={contactsBox}>
        <a className={contactsText} href="mailto:webforevery@gmail.com">
          webforevery@gmail.com
        </a>
        <ul className={socialsBox}>
          <li className={socialsIcon}>
            <a href="https://www.instagram.com/web.every/">
              <AiFillInstagram />
            </a>
          </li>
          <li className={socialsIcon}>
            <a href="https://www.facebook.com/profile.php?id=100092267193984">
              <AiFillFacebook />
            </a>
          </li>
          <li className={socialsIcon}>
            <a href="instagram.com">
              <BsTelegram />
            </a>
          </li>
        </ul>
        <a className={contactsText} href="tel:+380966058605">
          +380966058605
        </a>
      </div>
    </>
  );
};

export default ThirdContacts;
