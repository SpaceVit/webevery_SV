import React from 'react';
import { NavLink } from 'react-router-dom';

import ThirdNavBar from 'components/share/NavBars/ThirdNavBar/ThirdNavBar';
import ThirdLogo from 'components/share/Logoes/ThirdLogo/ThirdLogo';
import ThirdContacts from 'components/share/Contacts/ThirdContacts/ThirdContacts';

import styles from './ThirdFooter.module.scss';

const ThirdFooter = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerNavBar}>
          <ThirdNavBar />
        </div>
        <div className={styles.footerContent}>
          <div className={(styles.footerContacts, styles.footerContentBox)}>
            <ThirdLogo size={styles.logoSize} />
            <ThirdContacts
              contactsBox={styles.contactsBox}
              contactsText={styles.contactsText}
              socialsBox={styles.socialsBox}
              socialsIcon={styles.socialsIcon}
            />
          </div>
          <div className={styles.footerContentBox}>
            <NavLink
              to="ourServices/consultation"
              className={styles.consultationLink}
            >
              Consultation
            </NavLink>
            <NavLink
              to="ourServices/webDeveloping"
              className={styles.consultationLink}
            >
              Web-developing
            </NavLink>
            <NavLink
              to="ourServices/supporting"
              className={styles.consultationLink}
            >
              Supporting
            </NavLink>
          </div>
          <div className={(styles.footerAchievements, styles.footerContentBox)}>
            3
          </div>
          <div className={(styles.footerAboutUs, styles.footerContentBox)}>
            4
          </div>
          <div className={(styles.footerFeedback, styles.footerContentBox)}>
            5
          </div>
        </div>
        <div>
          <p className={styles.origin}>Ukrainian product * 2023</p>
        </div>
      </div>
    </>
  );
};

export default ThirdFooter;
