"use client";
import style from "./Sidebar.module.css";
import { Navlinks } from "@/Data";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { contextApi } from "@/ContextApi";

const Sidebar = () => {
  const { IsOpenSidebar, closeSidebar } = useContext(contextApi);

  return (
    <section
      className={
        IsOpenSidebar
          ? `${style.sidebarWrapper} ${style.show}`
          : style.sidebarWrapper
      }
    >
      <div className={style.sidebar}>
        <button className={style.closeBtn} onClick={() => closeSidebar()}>
          <FaTimes className={style.closeIcon} />
        </button>

        <div className={style.sidebarLinks}>
          {Navlinks.map((link, index) => {
            return (
              <ul key={index} className={style.links}>
                <li>{link.label}</li>
              </ul>
            );
          })}
          <button className={style.registerBtn}>register now</button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
