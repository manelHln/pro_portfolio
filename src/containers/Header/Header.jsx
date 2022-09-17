import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../../wrapper/Wrapper";
import { HiOutlineClipboardList, FaPenNib } from "../../constants/svgs";
import "./Header.scss";

const CustomButton = (props) => {
  return (
    <motion.a
      className="header-button"
      href="mailto:me@gmail.com"
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      {props.icon}
      <p className="p-text">
        {props.text}
      </p>
    </motion.a>
  );
};

const Header = () => (
  <div className="app__header">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <p className="greeting-text">👋 Hey I'm,</p>
      <p className="name-text">Emmanuel H.</p>
      <p className="profile-text">
        A Web and <span>Mobile App</span> Developper
      </p>
      <p className="expertise-text">
        I combine my knowledge and your ideas to make good looking responsive
        and dynamic <span>web and mobile application</span> while creating an optimal experience for the
        end user.
      </p>
      {/* <img src={images.email} /> */}
      <div className="header-buttons">
        <CustomButton text="Hire Me!" icon={<FaPenNib size={25} />} />
        <CustomButton text="Download Resume" icon={<HiOutlineClipboardList size={25} />} />
      </div>
    </motion.div>
  </div>
);

export default Wrapper(Header, "home");
