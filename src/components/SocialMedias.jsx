import React from "react";
import { BsTwitter, BsInstagram, FaFacebookF } from "../constants/svgs";

const SocialMedias = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedias;
