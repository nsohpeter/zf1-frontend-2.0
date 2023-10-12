"use client";
import { useState } from "react";
import styles from "./TestimonialSlider.module.css";
import { testimonialSlider } from "@/Data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const TestimonialSlider = () => {
  const [monialSlider, setMonialSlider] = useState(testimonialSlider);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevImage) => {
      let index = prevImage + 1;
      if (index > monialSlider.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((prevImage) => {
      let index = prevImage - 1;
      if (index < 0) {
        index = monialSlider.length - 1;
      }
      return index;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.TestimonialSliderslides}>
        {monialSlider.map((item, imageIdex) => {
          let position = "nextSlide";
          if (imageIdex === index) {
            position = "activeSlide";
          }
          if (
            imageIdex === index - 1 ||
            (index === 0 && imageIdex === monialSlider.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article
              key={imageIdex}
              className={`${styles.position} ${
                position === "activeSlide" ? styles.activeSlide : ""
              }`}
            >
              <p>{item.message}</p>
              <h2>{item.name}</h2>
            </article>
          );
        })}

        <div className={styles.controlClick}>
          <button className={styles.prev} onClick={() => prevSlide()}>
            <BiLeftArrow />
          </button>
          <button className={styles.next} onClick={() => nextSlide()}>
            <BiRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
