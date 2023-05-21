import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import SideBar from '../Sidebar/Sidebar';

// import styles from './SharedLayout.module.scss';

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
        <div>
          <button type="button" onClick={changeFirstStyle}>
            1-st
          </button>
          <button type="button" onClick={changeSecondStyle}>
            2-nd
          </button>
          <button type="button" onClick={changeThirdStyle}>
            3-rd
          </button>
        </div>
        <Hero />
        <Main />
        <SideBar />
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
