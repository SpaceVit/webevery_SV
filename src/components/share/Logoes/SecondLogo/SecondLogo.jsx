import React from 'react';
import { NavLink } from 'react-router-dom';
import OfficialMiniLogo from '../../../../images/logoes/OfficialMiniLogo.png';

const SecondLogo = () => {
  return (
    <div>
      <NavLink to={`/`}>
        <img src={OfficialMiniLogo} alt="logo" width={74} height={74} />
      </NavLink>
    </div>
  );
};

export default SecondLogo;
