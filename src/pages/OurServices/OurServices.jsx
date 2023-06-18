import React from 'react';
import styles from './OurServices.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

import SliderBar from 'components/share/SliderBar/SliderBar';

const OurServices = () => {
  return (
    <>
      <section className={styles.page}>
        <h1 className={styles.title}>Our Services</h1>
        <aside className={styles.aside}>
          <SliderBar />
          {/* <ul className={styles.servicesLinksList}>
            <li className={styles.servicesListItem}>
              <NavLink to="consultation" className={styles.consultationLink}>
                Consultation
              </NavLink>
            </li>

            <li className={styles.servicesListItem}>
              <NavLink to="webDeveloping" className={styles.consultationLink}>
                Web-developing
              </NavLink>
            </li>

            <li className={styles.servicesListItem}>
              <NavLink to="supporting" className={styles.consultationLink}>
                Supporting
              </NavLink>
            </li>
          </ul> */}
        </aside>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default OurServices;
