import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <p> this is the footer component</p>
      <hr className={style.footerhr} />
      <p className="copy-right">
        Made by SUPERCODE @ 2023- All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
