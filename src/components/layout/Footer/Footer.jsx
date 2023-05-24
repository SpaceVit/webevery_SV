import React from 'react';

import FirstFooter from 'components/screens/Footers/FirstFooter/FirstFooter';
import SecondFooter from 'components/screens/Footers/SecondFooter/SecondFooter';
import ThirdFooter from 'components/screens/Footers/ThirdFooter/ThirdFooter';

// import styles from './Footer.module.scss';

const Footer = ({ first, second, third }) => {
  return (
    <>
      <div>
        {first && <FirstFooter />}
        {second && <SecondFooter />}
        {third && <ThirdFooter />}
      </div>
    </>
  );
};

export default Footer;
