import styles from "../styles/modules/FrontPage.module.scss";

function FrontPage() {
  return (
    <section className={styles.front_page}>
      <div className={styles.front_page__container}>
        <div className={styles.front_page__slogan}>
          <h1>Empowering teachers and students for a brighter future.</h1>
        </div>
      </div>
    </section>
  );
}

export default FrontPage;
