import styles from './NbCircles.module.scss';

const NbCircles = () => {
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
    </>
  );
};

export default NbCircles;
