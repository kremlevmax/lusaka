import styles from "../styles/modules/BurgerMenu.module.scss";
import Link from "next/link";

const BurgerMenu = () => {
  return (
    <div className={styles.burgermenu}>
      <ul className={styles.navbar__buttons_container}>
        <li>
          <Link href='/projects'>
            <a className='navbar__button'>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/ourvision'>
            <a className='navbar__button'>Our Provision</a>
          </Link>
        </li>
        <li>
          <Link href='/ourteam'>
            <a className='navbar__button'>Our Team</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a className='navbar__button'>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/donate'>
            <a className={styles.navbar__button_secondary}>Donate</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
