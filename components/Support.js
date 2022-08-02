import Link from "next/link";
import styles from "../styles/modules/Support.module.scss";

function Support() {
  return (
    <section className={styles.support}>
      <div className={styles.support__container}>
        <div className={styles.support__part}>
          <h2>Supporting education and innovation.</h2>
          <Link href='/our-vision'>
            <a className={styles.support__button_secondary}>Our Vision</a>
          </Link>
        </div>
        <div className={styles.support__part}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt molli.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Support;
