import styles from './NbCircles.module.scss';
import { useState } from 'react';

const NbCircles = () => {
  const [active, setActive] = useState(false);

  // const helloBtn = document.getElementById('helloBtn');

  const scrollFunction = () => {
    const helloBtn = document.getElementById('helloBtn');

    console.log('ha!', window.scrollY);

    if (!helloBtn) {
      return;
    }
    if ((window.scrollY >= 1100 && window.scrollY < 1260) || (window.scrollY > 1300 && window.scrollY < 1450)) {
      helloBtn.className = styles.helloBtn;
      setActive(!active);
    } else if (window.scrollY >= 1260 && window.scrollY <= 1300) {
      // console.log(helloBtn.classList);
      helloBtn.className = styles.helloBtnIndex;
    } else {
      helloBtn.className = styles.helloBtnNone;
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <>
      <div className={styles.emptyCirclesWrapper}>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
      </div>
      <p className={styles.justText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia non quibusdam dicta nesciunt. Neque nobis obcaecati qui ratione dolore assumenda
        culpa tempora fuga! Doloremque blanditiis facilis repudiandae odio praesentium provident. Atque, et aspernatur, animi ipsam incidunt voluptatem
        consequuntur minima labore iusto neque commodi explicabo quisquam cum laborum unde est aut quasi? Doloribus facere iusto quos cupiditate esse maxime
        dignissimos! Amet quod dicta, obcaecati odit earum, quasi quia aperiam eos nulla dolore repellat sit voluptatum vero tempore! Delectus minima inventore
        quaerat magni consequatur magnam veniam architecto maiores quibusdam, praesentium corrupti qui saepe tenetur nulla dolore eos earum? Magnam, atque
        ipsum.
      </p>
      <div className={`${styles.emptyCirclesWrapper} ${styles.emptyCirclesWrapperSecond}`}>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
        <div className={styles.emptyCircles}></div>
      </div>
      <p className={styles.justText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia non quibusdam dicta nesciunt. Neque nobis obcaecati qui ratione dolore assumenda
        culpa tempora fuga! Doloremque blanditiis facilis repudiandae odio praesentium provident. Atque, et aspernatur, animi ipsam incidunt voluptatem
        consequuntur minima labore iusto neque commodi explicabo quisquam cum laborum unde est aut quasi? Doloribus facere iusto quos cupiditate esse maxime
        dignissimos! Amet quod dicta, obcaecati odit earum, quasi quia aperiam eos nulla dolore repellat sit voluptatum vero tempore! Delectus minima inventore
        quaerat magni consequatur magnam veniam architecto maiores quibusdam, praesentium corrupti qui saepe tenetur nulla dolore eos earum? Magnam, atque
        ipsum.
      </p>

      {/* ==== div100 ==== */}

      <div className={styles.div100}>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
        <div className={styles.div101}></div>
      </div>

      <p className={styles.justText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia non quibusdam dicta nesciunt. Neque nobis obcaecati qui ratione dolore assumenda
        culpa tempora fuga! Doloremque blanditiis facilis repudiandae odio praesentium provident. Atque, et aspernatur, animi ipsam incidunt voluptatem
        consequuntur minima labore iusto neque commodi explicabo quisquam cum laborum unde est aut quasi? Doloribus facere iusto quos cupiditate esse maxime
        dignissimos! Amet quod dicta, obcaecati odit earum, quasi quia aperiam eos nulla dolore repellat sit voluptatum vero tempore! Delectus minima inventore
        quaerat magni consequatur magnam veniam architecto maiores quibusdam, praesentium corrupti qui saepe tenetur nulla dolore eos earum? Magnam, atque
        ipsum.
      </p>
      {/* ==== div200 ==== */}
      <div className={styles.div200}>
        <div className={styles.div300}>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
        </div>
        <div className={styles.div300}>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
          <div className={styles.div201}></div>
        </div>
      </div>

      <p className={styles.justText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia non quibusdam dicta nesciunt. Neque nobis obcaecati qui ratione dolore assumenda
        culpa tempora fuga! Doloremque blanditiis facilis repudiandae odio praesentium provident. Atque, et aspernatur, animi ipsam incidunt voluptatem
        consequuntur minima labore iusto neque commodi explicabo quisquam cum laborum unde est aut quasi? Doloribus facere iusto quos cupiditate esse maxime
        dignissimos! Amet quod dicta, obcaecati odit earum, quasi quia aperiam eos nulla dolore repellat sit voluptatum vero tempore! Delectus minima inventore
        quaerat magni consequatur magnam veniam architecto maiores quibusdam, praesentium corrupti qui saepe tenetur nulla dolore eos earum? Magnam, atque
        ipsum.
      </p>
      <button
        type="button"
        className={`${() => scrollFunction()} `}
        id="helloBtn"
        onClick={() => {
          console.log('active');
        }}
      >
        hello!
      </button>
    </>
  );
};

export default NbCircles;
