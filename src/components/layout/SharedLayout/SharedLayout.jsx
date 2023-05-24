import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import SideBar from '../Sidebar/Sidebar';

import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  const [firstStyle, setFirstStyle] = useState(true);
  const [secondStyle, setSecondStyle] = useState(false);
  const [thirdStyle, setThirdStyle] = useState(false);

  const changeFirstStyle = () => {
    setFirstStyle(true);
    setSecondStyle(false);
    setThirdStyle(false);
  };

  const changeSecondStyle = () => {
    setFirstStyle(false);
    setSecondStyle(true);
    setThirdStyle(false);
  };

  const changeThirdStyle = () => {
    setFirstStyle(false);
    setSecondStyle(false);
    setThirdStyle(true);
  };

  return (
    <>
      <Header first={firstStyle} second={secondStyle} third={thirdStyle} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.btnBox}>
          <button
            className={styles.firstBtn}
            type="button"
            onClick={changeFirstStyle}
          >
            change your mind
          </button>
          <button
            className={styles.secondBtn}
            type="button"
            onClick={changeSecondStyle}
          >
            change your mind
          </button>
          <button
            className={styles.thirdBtn}
            type="button"
            onClick={changeThirdStyle}
          >
            change your mind
          </button>
        </div>
        <Hero first={firstStyle} second={secondStyle} third={thirdStyle} />
        <Main first={firstStyle} second={secondStyle} third={thirdStyle} />
        <SideBar first={firstStyle} second={secondStyle} third={thirdStyle} />
        <Outlet />
      </Suspense>
      <Footer first={firstStyle} second={secondStyle} third={thirdStyle} />
    </>
  );
};

export default SharedLayout;
