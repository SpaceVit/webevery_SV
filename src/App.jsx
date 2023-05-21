import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/layout/SharedLayout';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Outlet start */}
          <Route path="aboutUs" element={<AboutUs />} />
          {/* <Route path="aboutUs/:id" element={<DevPage />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* Outlet end */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
