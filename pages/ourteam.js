import styles from "../styles/modules/Ourteam.module.scss";

const ourteam = () => {
  return (
    <div className={styles.ourteam}>
      <div className={styles.ourteam__container}>
        <div className={styles.ourteam__post}>
          <div
            className={styles.ourteam__post_img}
            id={styles.image01}
            alt='Materials for Learning'
          />

          <div className={styles.ourteam__post_desc}>
            <p className={styles.ourteam__post_desc_date}>
              First Name Last Name
            </p>
          </div>
        </div>
        <div className={styles.ourteam__post}>
          <div
            className={styles.ourteam__post_img}
            id={styles.image02}
            alt='Materials for Learning'
          />
          <div className={styles.ourteam__post_desc}>
            <p className={styles.ourteam__post_desc_date}>
              First Name Last Name
            </p>
          </div>
        </div>
        <div className={styles.ourteam__post}>
          <div
            className={styles.ourteam__post_img}
            id={styles.image03}
            alt='Materials for Learning'
          />
          <div className={styles.ourteam__post_desc}>
            <p className={styles.ourteam__post_desc_date}>
              First Name Last Name
            </p>
          </div>
        </div>
        <div className={styles.ourteam__post}>
          <div
            className={styles.ourteam__post_img}
            id={styles.image04}
            alt='Materials for Learning'
          />
          <div className={styles.ourteam__post_desc}>
            <p className={styles.ourteam__post_desc_date}>
              First Name Last Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourteam;
