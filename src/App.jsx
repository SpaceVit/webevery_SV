import React, { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import SharedLayout from 'components/layout/SharedLayout';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OurSevices = lazy(() => import('./pages/OurServices'));
const Hero = lazy(() => import('./components/layout/Hero'));
const Consultation = lazy(() =>
  import('./components/share/OurServices/Consultation')
);
const WebDeveloping = lazy(() =>
  import('./components/share/OurServices/WebDeveloping')
);
const Supporting = lazy(() =>
  import('./components/share/OurServices/Supporting')
);

const App = () => {
  const [firstStyle, setFirstStyle] = useState(
    JSON.parse(localStorage.getItem('firstStyle'))
  );
  const [secondStyle, setSecondStyle] = useState(
    JSON.parse(localStorage.getItem('secondStyle'))
  );
  const [thirdStyle, setThirdStyle] = useState(
    JSON.parse(localStorage.getItem('thirdStyle'))
  );

  if (firstStyle === null) {
    return setFirstStyle(true);
  } else if (localStorage.getItem('firsrStyle') === false) {
    return setFirstStyle(false);
  }

  const changeFirstStyle = () => {
    localStorage.setItem('firstStyle', true);
    localStorage.setItem('secondStyle', false);
    localStorage.setItem('thirdStyle', false);
    setSecondStyle(false);
    setFirstStyle(true);
    setThirdStyle(false);
  };

  const changeSecondStyle = () => {
    localStorage.setItem('firstStyle', false);
    localStorage.setItem('secondStyle', true);
    localStorage.setItem('thirdStyle', false);
    setSecondStyle(true);
    setFirstStyle(false);
    setThirdStyle(false);
  };

  const changeThirdStyle = () => {
    localStorage.setItem('firstStyle', false);
    localStorage.setItem('secondStyle', false);
    localStorage.setItem('thirdStyle', true);
    setThirdStyle(true);
    setSecondStyle(false);
    setFirstStyle(false);
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
            <Route path="consultation" element={<Consultation />} />
            <Route path="webDeveloping" element={<WebDeveloping />} />
            <Route path="supporting" element={<Supporting />} />
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
