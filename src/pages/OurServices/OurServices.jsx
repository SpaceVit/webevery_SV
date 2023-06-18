import React from 'react';
import styles from './OurServices.module.scss';
import { Outlet } from 'react-router-dom';

import SliderBar from 'components/share/SliderBar/SliderBar';

const OurServices = () => {
  return (
    <>
      <section className={styles.page}>
        <h1 className={styles.title}>Our Services</h1>
        <aside className={styles.aside}>
          <SliderBar />
        </aside>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default OurServices;
