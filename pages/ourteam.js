import Slider from "../components/Slider";
import styles from "../styles/modules/Ourteam.module.scss";

const ourteam = () => {
  return (
    <section className={styles.ourteam}>
      <div className={styles.ourteam__container}>
        <Slider />
      </div>
    </section>
  );
};

export default ourteam;
