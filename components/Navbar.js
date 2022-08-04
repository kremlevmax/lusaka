import Link from "next/link";
import styles from "../styles/modules/Navbar.module.scss";
import Hamburger from "./Hamburger";
import BurgerMenu from "./BurgerMenu";

function Navbar({ burgerMenuOpen, toggleBurgerMenu, isBlack }) {
  const buttonStyle = isBlack
    ? styles.navbar__button_black
    : styles.navbar__button_white;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className='navbar__logo-container'>
          <Link href='/'>
            <a className={styles.navbar__logo}>
              <span className={buttonStyle}>Lusaka</span>
            </a>
          </Link>
        </div>
        <ul className={styles.navbar__buttons_container}>
          <li>
            <Link href='/projects'>
              <a className={buttonStyle}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/ourvision'>
              <a className={buttonStyle}>Our Vision</a>
            </Link>
          </li>
          <li>
            <Link href='/ourteam'>
              <a className={buttonStyle}>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className={buttonStyle}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/donate'>
              <a className={styles.navbar__button_secondary}>Donate</a>
            </Link>
          </li>
        </ul>
        <div className={styles.burger} onClick={toggleBurgerMenu}>
          <Hamburger burgerMenuOpen={burgerMenuOpen} isBlack={isBlack} />
        </div>
      </div>
      {burgerMenuOpen && <BurgerMenu />}
    </nav>
  );
}

export default Navbar;
