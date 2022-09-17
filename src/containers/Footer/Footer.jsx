import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import Wrapper from "../../wrapper/Wrapper";
import MotionWrap from "../../wrapper/MotionWrap";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Take a <span>coffe & chat</span> with me
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
      <form className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="p-text"
          />
        </div>
        <div className="app__flex">
          <input
            type="text"
            placeholder="Your email"
            name="email"
            className="p-text"
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            name="message"
            className="p-text"
          />
        </div>
        <button type="submit" className="p-text">
          Send Message
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
