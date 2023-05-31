import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import SideBar from '../Sidebar/Sidebar';

// import styles from './SharedLayout.module.scss';

const SharedLayout = ({ first, second, third }) => {
  return (
    <>
      <Header first={first} second={second} third={third} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />

        {/* <Hero first={first} second={second} third={third} /> */}
        <Main first={first} second={second} third={third} />
        <SideBar first={first} second={second} third={third} />
      </Suspense>
      <Footer first={first} second={second} third={third} />
    </>
  );
};

export default SharedLayout;
