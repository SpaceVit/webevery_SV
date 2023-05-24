import React from 'react';
import { NavLink } from 'react-router-dom';
import OfficialLogo from '../../../../images/logoes/OfficialLogo.png';

const FirstLogo = () => {
  return (
    <div>
      <NavLink to={`/`}>
        <img src={OfficialLogo} alt="logo" width={160} height={160} />
      </NavLink>
    </div>
  );
};

export default FirstLogo;
