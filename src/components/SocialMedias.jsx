import React from "react";
import { SiWhatsapp, SiGithub, SiTwitter } from "react-icons/si";

const SocialMedias = () => {
  return (
    <div className="app__social">
      <div onClick={() => window.open("https://wa.me/22996424245", "_blank")}>
        <SiWhatsapp />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://twitter.com/HolonouEmmanuel?t=leTalfXjhfYO3MV7JWLAoA&s=09",
            "_blank"
          )
        }
      >
        <SiTwitter />
      </div>
      <div onClick={() => window.open("https://github.com/manelHln", "_blank")}>
        <SiGithub />
      </div>
    </div>
  );
};

export default SocialMedias;
