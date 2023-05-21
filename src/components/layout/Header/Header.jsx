import React from 'react';
import FirstHeader from 'components/screens/Headers/FirstHeader/FirstHeader';
import SecondHeader from 'components/screens/Headers/SecondHeader/SecondHeader';
import ThirdHeader from 'components/screens/Headers/ThirdHeader/ThirdHeader';

// import styles from './Header.module.scss';

const Header = ({ first, second, third }) => {
  return (
    <>
      <div>
        {first && <FirstHeader />}
        {second && <SecondHeader />}
        {third && <ThirdHeader />}
      </div>
    </>
  );
};

export default Header;
