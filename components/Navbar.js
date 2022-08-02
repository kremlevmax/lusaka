import Link from "next/link";
import styles from "../styles/modules/Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className='navbar__logo-container'>
          <Link href='/index'>
            <a className={styles.navbar__logo}>Lusaka</a>
          </Link>
        </div>
        <ul className={styles.navbar__buttons_container}>
          <li>
            <Link href='/projects'>
              <a className='navbar__button'>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/our-provision'>
              <a className='navbar__button'>Our Provision</a>
            </Link>
          </li>
          <li>
            <Link href='/our-team'>
              <a className='navbar__button'>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='navbar__button'>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className={styles.navbar__button_secondary}>Donate</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
