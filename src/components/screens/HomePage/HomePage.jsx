import { useState } from 'react';
import React from 'react';
import FirstHeader from 'components/layout/Header/FirstHeader';
import SecondHeader from 'components/layout/SecondHeader/SecondHeader';

const HomePage = () => {
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
      <div>
        {firstStyle && <FirstHeader />}
        {secondStyle && <SecondHeader />}
        {thirdStyle && <p> Third Header </p>}
      </div>
      {firstStyle && (
        <div>
          <p> First Hero </p>
          <h1>get a WEB solution for EVERY request</h1>
          <p>choose everything you wish</p>
          <button type="button" onClick={changeFirstStyle}>
            1-st
          </button>
          <button type="button" onClick={changeSecondStyle}>
            2-nd
          </button>
          <button type="button" onClick={changeThirdStyle}>
            3-rd
          </button>
        </div>
      )}
      {secondStyle && (
        <div>
          <p> Second Hero </p>
          <h1>get a WEB solution for EVERY request</h1>
          <p>be sure we can surprise you</p>
          <button type="button" onClick={changeFirstStyle}>
            1-st
          </button>
          <button type="button" onClick={changeSecondStyle}>
            2-nd
          </button>
          <button type="button" onClick={changeThirdStyle}>
            3-rd
          </button>
        </div>
      )}
      {thirdStyle && (
        <div>
          <p> Third Hero </p>
          <h1>get a WEB solution for EVERY request</h1>
          <p>entrust us your successful future</p>
          <button type="button" onClick={changeFirstStyle}>
            1-st
          </button>
          <button type="button" onClick={changeSecondStyle}>
            2-nd
          </button>
          <button type="button" onClick={changeThirdStyle}>
            3-rd
          </button>
        </div>
      )}

      <div>
        {firstStyle && <p> First Footer </p>}
        {secondStyle && <p> Second Footer </p>}
        {thirdStyle && <p> Third Footer </p>}
      </div>
    </>
  );
};

export default HomePage;
