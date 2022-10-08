import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../../wrapper/Wrapper";
import { HiOutlineClipboardList, FaPenNib } from "../../constants/svgs";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const CustomButton = (props) => {
  return (
    <motion.a
      className="header-button"
      href={props.link}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, type: "tween" }}
      target={props.target && "_blank"}
    >
      {props.icon}
      <p className="p-text">{props.text}</p>
    </motion.a>
  );
};
 
const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="app__header">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <p className="greeting-text">{t("headerGreetings")}</p>
        <p className="name-text">Emmanuel H.</p>
        <p className="profile-text">
          {t("headerTitle1")}<span>{t("mobile")}</span>{t("headerTitle2")}
        </p>
        <p className="expertise-text">{t("headerDesc1")}<span>{t("headerDescSpan")}</span>{t("headerDesc2")}</p>
        <div className="header-buttons">
          <CustomButton
            text={t("hireBtn")}
            link="mailto:emmanuelholonou.pro@gmail.com"
            icon={<FaPenNib size={25} />}
          />
          <CustomButton
            text={t("downloadBtn")}
            link={t("linkCV")}
            target
            icon={<HiOutlineClipboardList size={25} />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Wrapper(Header, "home");
