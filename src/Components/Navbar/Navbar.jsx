"use client";

import style from "./Navbar.module.css";
import { useContext } from "react";
import { contextApi } from "@/ContextApi";

import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { Navlinks } from "@/Data";

const Navbar = () => {
  const { openSidebar } = useContext(contextApi);
  return (
    <nav className={style.container}>
      <div className={style.navCenter}>
        <div className={style.navHeader}>
          <div className={style.logo}>
            <Image
              src="./photos/logo 1.png"
              width={80}
              height={80}
              alt="photo"
              priority={false}
              unoptimized
            />
          </div>
          <button className={style.toggleBtn} onClick={() => openSidebar()}>
            <FaBars />
          </button>
        </div>
        <div className={style.navLinks}>
          {Navlinks.map((link, index) => {
            return (
              <ul className={style.links} key={index}>
                <li>{link.label}</li>
              </ul>
            );
          })}
          <button className={style.registerBtn}>register now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
