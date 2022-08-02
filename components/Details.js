import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/Details.module.scss";
import image01 from "../images/01.jpeg";
import image02 from "../images/02.jpeg";
import image03 from "../images/03.jpeg";

function Details() {
  return (
    <section className={styles.details}>
      <div className={styles.details__container}>
        <div className={styles.details__line}>
          <div className={styles.details__img_container}>
            <Image
              className={styles.details__img}
              src={image01}
              alt='Materials for Learning'
            />
          </div>
          <div className={styles.details__desc}>
            <h3>Materials for Learning</h3>
            <p>
              Many educational materials in local languages are often out of
              date. We work with school leaders and publishers to ensure that
              students have access to current textbooks that are age appropriate
              and written in their primary language.
            </p>
            <Link href='/materials-for-learning'>
              <a className={styles.details__button}>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.details__line}>
          <div className={styles.details__desc}>
            <h3>Continuing Education for Teachers</h3>
            <p>
              We create bespoke continuing education programs to address the
              needs of teachers and their student communities. From training on
              the latest technology to new pedagogical methods, we help teachers
              make their classrooms engaging and successful.
            </p>
            <Link href='/education-for-teachers'>
              <a className={styles.details__button}>Learn More</a>
            </Link>
          </div>
          <div className={styles.details__img_container}>
            <Image
              className={styles.details__img}
              src={image02}
              alt='Continuing Education for Teachers'
            />
          </div>
        </div>
        <div className={styles.details__line}>
          <div className={styles.details__img_container}>
            <Image
              className={styles.details__img}
              src={image03}
              alt='Support for Communities'
            />
          </div>
          <div className={styles.details__desc}>
            <h3>Support for Communities</h3>
            <p>
              Education happens within the context of a larger community. Our
              approach extends beyond the school to help ensure students have
              the necessary support to do their best learning.
            </p>
            <Link href='/support-for-communities'>
              <a className={styles.details__button}>Learn More</a>
            </Link>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Details;
