import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSV from '../../../../images/logoes/LogoSV.png';

const ThirdLogo = ({ size }) => {
  return (
    <div className={size}>
      <NavLink to={`/`}>
        <img src={LogoSV} alt="logo" />
      </NavLink>
    </div>
  );
};

export default ThirdLogo;
