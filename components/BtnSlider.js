import styles from "../styles/modules/Slider.module.scss";
import Image from "next/image";

import leftArrow from "../icons/left-arrow.svg";
import rightArrow from "../icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  const btnClassName =
    direction === "next" ? styles.btn__next : styles.btn__prev;

  return (
    <button className={btnClassName} onClick={moveSlide}>
      <Image src={direction === "next" ? rightArrow : leftArrow} alt='Arrow' />
    </button>
  );
}
