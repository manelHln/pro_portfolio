import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import Wrapper from "../../wrapper/Wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <>
      <h2 className="head-text">
        {t("footerTitle1")} <span>{t("footerTitleSpan")}</span> {t("footerTitle2")}
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:emmanuelholonou@gmail.com" className="p-text">
            emmanuelholonou.pro@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="tel" />
          <a href="tel: +22996424245" className="p-text">
            +22996424245
          </a>
        </div>
      </div>
      <form action="https://formsubmit.co/emmanuelholonou.pro@gmail.com" method="POST" className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            placeholder={t("namePlaceh")}
            name="name"
            className="p-text"
          />
        </div>
        <div className="app__flex">
          <input
            type="text"
            placeholder={t("emailPlaceh")}
            name="email"
            className="p-text"
          />
        </div>

        <div>
          <textarea
            placeholder={t("messagePlaceh")}
            name="message"
            className="p-text"
          />
        </div>
        <button type="submit" className="p-text">
          {t("sendBtn")}
        </button>
      </form>
    </>
  );
};

export default Wrapper(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
