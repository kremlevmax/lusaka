import styles from "../styles/modules/Quote.module.scss";

export const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles.quote__container}>
        <blockquote>
          <h2>
            “With the support from Lusaka, we have been able to serve our
            students better than ever.”
          </h2>
        </blockquote>
        <figcaption>- Alonzo F., School Principal</figcaption>
      </div>
    </section>
  );
};
