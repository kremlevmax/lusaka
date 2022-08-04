import styles from "../styles/modules/Blog.module.scss";
import Image from "next/image";
import image01 from "../images/01.jpeg";
import image02 from "../images/02.jpeg";
import image03 from "../images/03.jpeg";
import image04 from "../images/04.jpeg";

const blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__container}>
        <div className={styles.blog__post}>
          <Image
            className={styles.blog__pos_img}
            src={image01}
            alt='Materials for Learning'
          />

          <div className={styles.blog__post_desc}>
            <p className={styles.blog__post_desc_date}>8/14/19</p>
            <h3 className={styles.blog__post_desc_title}>Blog Post Four</h3>
            <p className={styles.blog__post_desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.blog__post}>
          <Image
            className={styles.blog__pos_img}
            src={image02}
            alt='Materials for Learning'
          />
          <div className={styles.blog__post_desc}>
            <p className={styles.blog__post_desc_date}>8/14/19</p>
            <h3 className={styles.blog__post_desc_date}>Blog Post Three</h3>
            <p className={styles.blog__post_desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.blog__post}>
          <Image
            className={styles.blog__pos_img}
            src={image03}
            alt='Materials for Learning'
          />
          <div className={styles.blog__post_desc}>
            <p className={styles.blog__post_desc_date}>8/14/19</p>
            <h3 className={styles.blog__post_desc_date}>Blog Post Two</h3>
            <p className={styles.blog__post_desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.blog__post}>
          <Image
            className={styles.blog__pos_img}
            src={image04}
            alt='Materials for Learning'
          />
          <div className={styles.blog__post_desc}>
            <p className={styles.blog__post_desc_date}>3/11/19</p>
            <h3 className={styles.blog__post_desc_date}>Blog Post One</h3>
            <p className={styles.blog__post_desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
