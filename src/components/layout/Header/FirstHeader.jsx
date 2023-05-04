import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FirstHeader.module.scss';

const FirstHeader = () => {
  return (
    <>
      <NavLink to={`/`}>
        <h1 className={styles.titleNav}>Webevery</h1>
      </NavLink>

      <div></div>
    </>
  );
};

export default FirstHeader;
