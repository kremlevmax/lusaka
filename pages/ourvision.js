import Image from "next/image";
import styles from "../styles/modules/OurVision.module.scss";
import ourVision from "../images/our-vision.jpeg";

const ourvision = () => {
  return (
    <section className={styles.ourvision}>
      <div className={styles.ourvision__container}>
        <div className={styles.ourvision__text}>
          <h2>Educators are innovators.</h2>
          <p>
            Use this page to describe your company&apos;s mission and goals.
            Nullam tempor dolor sed nulla auctor, nec placerat felis sodales.
            Etiam et turpis mattis, efficitur mi ut, ultrices diam. Donec
            consectetur, odio eget porta varius, orci mauris viverra ante, eget
            egestas turpis sapien vel orci. Donec eu ornare augue, ut efficitur
            velit. Vestibulum et magna mattis, sollicitudin ligula ac, facilisis
            dui. Ut blandit lectus neque.
          </p>
          <p>
            Sit amet fringilla nisi mollis eget. Sed a eros nec leo euismod
            eleifend sit amet ut nisl blandit. Sed a eros nec leo euismod
            eleifend sit amet ut nisl. Nullam tempor dolor sed nulla auctor, nec
            placerat felis sodales. Etiam et turpis mattis, efficitur mi ut,
            ultrices diam. Donec consectetur, odio eget porta varius, orci
            mauris viverra ante, eget egestas turpis sapien vel orci mauris
            viverra.
          </p>
          <p>—</p>
          <p>Simone Lemoniere</p>
          <span>Executive Director, Mentor</span>
        </div>
        <div className={styles.ourvision__img}>
          <Image src={ourVision} alt='Materials for Learning' />
        </div>
      </div>
    </section>
  );
};

export default ourvision;
