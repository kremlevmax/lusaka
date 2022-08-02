import Link from "next/link";
import styles from "../styles/modules/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__address_column}>
          <p className={styles.footer__address_column__title}>
            The Lusaka Foundation
          </p>
          <p className={styles.footer__address_column__address}>
            123 Demo Street New York, NY 12345
          </p>
          <p className={styles.footer__address_column__testimonials}>
            Made with{" "}
            <Link href='/index'>
              <a className={styles.footer__column__link}>Squarespace</a>
            </Link>
          </p>
        </div>
        <div className={styles.footer__column}>
          <p className={styles.footer__column__title}>About</p>
          <Link href='/our-vision'>
            <a className={styles.footer__column__link}>Our Vision</a>
          </Link>
          <Link href='/donate'>
            <a className={styles.footer__column__link}>Donate</a>
          </Link>
        </div>
        <div className={styles.footer__column}>
          <p className={styles.footer__column__title}>Projects</p>
          <Link href='/materials-for-learning'>
            <a className={styles.footer__column__link}>
              Materials for Learning
            </a>
          </Link>
          <Link href='/education-for-teachers'>
            <a className={styles.footer__column__link}>
              Education for Teachers
            </a>
          </Link>
          <Link href='/support-for-communities'>
            <a className={styles.footer__column__link}>
              Support for Communities
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;