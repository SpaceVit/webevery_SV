import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSV from '../../../../images/logoes/LogoSV.png';

const ThirdLogo = () => {
  return (
    <div>
      <NavLink to={`/`}>
        <img src={LogoSV} alt="logo" width={160} height={160} />
      </NavLink>
    </div>
  );
};

export default ThirdLogo;
