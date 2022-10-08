import React from "react";
import { NavigationDots, SocialMedias } from "../components";
import { useTranslation } from "react-i18next";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    const {t} = useTranslation()
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedias />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">©️2022 Emmanuel</p>
            <p className="p-text">{t("copyright")}</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default Wrapper;
