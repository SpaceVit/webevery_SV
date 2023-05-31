import React from 'react';
import styles from './OurServices.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

const OurServices = () => {
  return (
    <>
      <section className={styles.page}>
        <h1 className={styles.content}>Our Services</h1>
        <ul className={styles.linksList}>
          <li>
            <NavLink to="consultation" className={styles.consultationLink}>
              Consultation
            </NavLink>
          </li>

          <li>
            <NavLink to="webDeveloping" className={styles.consultationLink}>
              Web-developing
            </NavLink>
          </li>

          <li>
            <NavLink to="supporting" className={styles.consultationLink}>
              Supporting
            </NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default OurServices;
