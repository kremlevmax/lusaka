import Image from "next/image";
import image03 from "../images/03.jpeg";
import styles from "../styles/modules/Donate.module.scss";

const donate = () => {
  return (
    <section className={styles.donate}>
      <div className={styles.donate__container}>
        <div className={styles.donate__text}>
          <h2>Make a Difference</h2>
          <p>
            Use this page to describe your company&apos;s mission and goals.
            Nullam tempor dolor sed nulla auctor, nec placerat felis sodales.
            Etiam et turpis mattis, efficitur mi ut, ultrices diam. Donec
            consectetur, odio eget porta varius, orci mauris viverra ante, eget
            egestas turpis sapien vel orci. Donec eu ornare augue, ut efficitur
            velit. Vestibulum et magna mattis, sollicitudin ligula ac, facilisis
            dui. Ut blandit lectus neque.
          </p>
        </div>
        <div className={styles.donate__img}>
          <Image src={image03} alt='Materials for Learning' />
        </div>
      </div>
    </section>
  );
};

export default donate;
