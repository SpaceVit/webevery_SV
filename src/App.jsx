import React, { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import SharedLayout from 'components/layout/SharedLayout';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OurSevices = lazy(() => import('./pages/OurServices'));
const Hero = lazy(() => import('./components/layout/Hero'));

const App = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              first={firstStyle}
              second={secondStyle}
              third={thirdStyle}
            />
          }
        >
          <Route
            index
            element={
              <>
                <Hero
                  first={firstStyle}
                  second={secondStyle}
                  third={thirdStyle}
                />
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
              </>
            }
          />

          {/* Outlet start */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourServices" element={<OurSevices />}>
            <Route
              path="consultation"
              element={<div>Comsultation is good</div>}
            />
          </Route>
          {/* <Route path="aboutUs/:id" element={<DevPage />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* Outlet end */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
