import "./About.scss";
import { motion } from "framer-motion";
import Wrapper from "../../wrapper/Wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import {abouts} from "../../constants/data"
import {useTranslation} from "react-i18next"

const About = () => {

  const {t} = useTranslation()


  return (
    <>
      <h2 className="head-text">
        {t("aboutTitle")}<span>{t("aboutTitleSpan")}</span>{t("aboutTitle2")}
      </h2>

      <div className="profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="profile-item"
            key={`${about.title}${index}`}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {t(about.title)}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {t(about.description)}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Wrapper(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
