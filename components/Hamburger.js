import styles from "../styles/modules/Hamburger.module.scss";

const Hamburger = ({ burgerMenuOpen, isBlack }) => {
  const burgerLineInitial = isBlack ? styles.burger_black : styles.burger_white;

  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={burgerMenuOpen ? styles.burger1open : burgerLineInitial}
        />
        <div
          className={burgerMenuOpen ? styles.burger2open : burgerLineInitial}
        />
        <div
          className={burgerMenuOpen ? styles.burger3open : burgerLineInitial}
        />
      </div>
    </>
  );
};

export default Hamburger;
//burgerMenuOpen ? styles.burger3open :
