import React from 'react';
import FirstHero from 'components/screens/Heroes/FirstHero/FirstHero';
import SecondHero from 'components/screens/Heroes/SecondHero/SecondHero';
import ThirdHero from 'components/screens/Heroes/ThirdHero/ThirdHero';
// import styles from './Hero.module.scss';

const Hero = ({ first, second, third }) => {
  return (
    <>
      <div>
        {first && <FirstHero />}
        {second && <SecondHero />}
        {third && <ThirdHero />}
      </div>
    </>
  );
};

export default Hero;
