import React from 'react';
import styles from './Design.module.scss';

const Design = () => {
  return (
    <div>
      <div className={styles.designTitleBox}>
        <h4 className={styles.designContent}>Graphic Design</h4>
        <h4 className={styles.designContent}>UI/UX</h4>
      </div>
      <div className={styles.designContentBox}>
        <div className={styles.designUiUxBox}>ui/ux content</div>
        <div className={styles.designGDBox}> Graphic design content</div>
      </div>
    </div>
  );
};

export default Design;
