import React from 'react';
import styles from './ThirdNavBar.module.scss';
import ThirdLogo from 'components/share/Logoes/ThirdLogo/ThirdLogo';
import ThirdContacts from 'components/share/Contacts/ThirdContacts/ThirdContacts';

const ThirdNavBar = () => {
  return (
    <>
      <div className={styles.navBarBox}>
        <div className={styles.navBarTitle}>
          <p>Contacts</p>
          <p>Our Services</p>
          <p>Achievements</p>
          <p>About Us</p>
          <p>Feedback Form</p>
        </div>
        <div className={styles.flex}>
          <div>
            <ThirdLogo />
            <ThirdContacts />
          </div>
          <div>
            <p>consultations</p>
            <p>web-developing</p>
            <p>supporting</p>
          </div>
          <div>
            <p>reviews</p>
            <p>our clients</p>
            <p>our projects</p>
          </div>
          <div>
            <p>our team</p>
            <p>our principles</p>
            <p>our partners</p>
          </div>
          <div className={styles.input}>
            <input></input>
            <input></input>
            <input></input>
            <button>Submit</button>
          </div>
        </div>
        <p className={styles.origin}>Ukrainian product * 2023</p>
      </div>
    </>
  );
};

export default ThirdNavBar;
