"use client";

import { useState } from "react";
import style from "./Banner.module.css";
import { bannerData } from "@/Data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";

const Banner = () => {
  const [imageSlide, setImageSlide] = useState(bannerData);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevImage) => {
      let index = prevImage + 1;
      if (index > imageSlide.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((prevImage) => {
      let index = prevImage - 1;
      if (index < 0) {
        index = imageSlide.length - 1;
      }
      return index;
    });
  };

  return (
    <div className={style.sectionCenter}>
      <div className={style.overlay}>
        <div className={style.buttonsContainer}>
          <input type="text" />
          <button className={style.herobBtn}>learn more</button>
        </div>
      </div>
      <div className={style.slides}>
        {imageSlide.map((item, imageIdex) => {
          let position = "nextSlide";
          if (imageIdex === index) {
            position = "activeSlide";
          }
          if (
            imageIdex === index - 1 ||
            (index === 0 && imageIdex === imageSlide.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article
              key={imageIdex}
              className={`${style.position} ${
                position === "activeSlide" ? style.activeSlide : ""
              }`}
            >
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="photo"
                priority={true}
                unoptimized
              />
            </article>
          );
        })}

        <div className={style.controlClick}>
          <button className={style.prev} onClick={() => prevSlide()}>
            <FiChevronLeft />
          </button>
          <button className={style.next} onClick={() => nextSlide()}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
