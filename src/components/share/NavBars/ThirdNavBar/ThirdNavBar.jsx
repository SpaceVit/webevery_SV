import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ThirdNavBar.module.scss';

const ThirdNavBar = () => {
  return (
    <>
      <div className={styles.navBarBox}>
        <div className={styles.navBarContacts}>
          <p>Contacts</p>
        </div>
        <div className={styles.navBarLinks}>
          <NavLink to="/ourServices" className={styles.navBarLink}>
            Our Services
          </NavLink>
          {/* <p className={styles.navBarLink}>Our Services</p> */}
          <p className={styles.navBarLink}>Achievements</p>
          <p className={styles.navBarLink}>About Us</p>
        </div>
        <div className={styles.navBarFeedback}>
          <p>Feedback form</p>
        </div>
      </div>
    </>
  );
};

export default ThirdNavBar;
