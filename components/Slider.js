import { ourTeamData } from "../data/ourTeamData";
import styles from "../styles/modules/Slider.module.scss";
import Image from "next/image";
import { useState } from "react";
import BtnSlider from "./BtnSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== ourTeamData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === ourTeamData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(ourTeamData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  ourTeamData.map((obj, index) => console.log(obj));
  return (
    <div className={styles.slider__container}>
      {ourTeamData.map((obj, index) => (
        <div
          key={obj.id}
          className={
            slideIndex === index + 1
              ? `${styles.slide} ${styles.active_anim}`
              : `${styles.slide}`
          }
        >
          <div>
            <Image src={ourTeamData[index].photo} alt='Team member photo' />
            <h3>{obj.name}</h3>
          </div>
          <div>
            <Image src={ourTeamData[index].photo} alt='Team member photo' />
            <h3>{obj.name}</h3>
          </div>
        </div>
      ))}

      <div className={styles.dots__container}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
            key={index}
          />
        ))}
      </div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Slider;
