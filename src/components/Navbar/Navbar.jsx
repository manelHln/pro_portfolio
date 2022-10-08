import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import {HiX, HiMenuAlt4} from "react-icons/hi"
import { motion } from "framer-motion";
import LangSelector from "../LangSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {t} = useTranslation()

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        {["home", "about", "works", "skills", "contact"].map((e) => (
          <li className="app__flex p-text" key={`link-${e}`}>
            <div />
            <a href={`#${e}`}>{t(e)}</a>
          </li>
        ))}
      </ul>

      {/* <a className="navbar-button" href="pro_cv.pdf" target="_blank">
        <HiOutlineClipboardList size={20} />
        <p className="p-text">Resume</p>
      </a> */}
      <LangSelector />

      <div className="mobile-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "works", "skills", "contact"].map((e) => (
                <li key={e}>
                  <a href={`#${e}`} onClick={() => setToggle(false)}>
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;