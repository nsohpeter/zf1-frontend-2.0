//import Image from 'next/image'
import Banner from "@/Components/Banner/Banner";

import styles from "./page.module.css";
import Image from "next/image";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Banner />

      <section className={styles.section2}>
        <div className={styles.left}>
          <h1>WE ARE CAREFULLY DELIVERING YOUR HAPPINESS</h1>
          <p>
            ZF1Logistics Managers have an in-depth understanding of individual
            overseas markets and the dynamics of specific trades. This expertise
            enables them to provide you with market-specific, local advice on
            factors affecting the transit of your cargo. With all of this
            expertise and capability comes an unrivalled commitment to customer
            service. We will work hard to understand your needs in order to
            develop a productive, long-term partnership.
          </p>
        </div>
        <div className={styles.right}>
          <Image
            src="./photos/Group 6.png"
            width={300}
            height={300}
            alt="photo"
            priority={true}
            unoptimized
          />
        </div>
      </section>
      {/* section - 3 */}
      <section className={styles.section3}>
        <div className={styles.image}>
          <Image
            src="./photos/phone 1.png"
            width={300}
            height={500}
            alt="photo"
            priority={true}
            unoptimized
          />
        </div>
        <div className={styles.text}>
          <p>
            Download our <br />
            <span>
              ZF1 <br /> APP
            </span>
          </p>
        </div>
        <div className={styles.rectangles}>
          <div className={styles.rectangle21}>
            <Image
              src="./photos/playstore 1.png"
              width={100}
              height={100}
              alt="photo"
              priority={true}
              unoptimized
            />
          </div>
          <div className={styles.rectangle22}>
            <Image
              src="./photos/61336bfe82b156000425b3a0 1.png"
              width={100}
              height={100}
              alt="photo"
              priority={true}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className={styles.section4}>
        <div className={styles.testimonialSlider}>
          <TestimonialSlider />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="./photos/forklift_01 1.png"
            width={100}
            height={100}
            alt="photo"
            priority={true}
            unoptimized
          />
        </div>
      </section>
    </main>
  );
}
