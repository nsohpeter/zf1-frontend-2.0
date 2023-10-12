//import Image from 'next/image'
import Banner from "@/Components/Banner/Banner";

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />

      <div className={styles.section2}>
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
      </div>
    </main>
  );
}
