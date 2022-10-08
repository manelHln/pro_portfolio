import "./Skills.scss";
import { motion } from "framer-motion";
import Wrapper from "../../wrapper/Wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import { skills, experiences } from "../../constants/data";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t} = useTranslation()
  
  return (
    <>
      <h2 className="head-text">{t("skillsTitle")}<span>{t("skillsTitleSpan")}</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill)=>(
            <motion.div
            key={skill.name}
            whileInView={{opacity: [0,1],}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name.toUpperCase()}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
            {experiences.map((experience)=>(
              <motion.div
              className="app__skills-exp-item"
              key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div
                className="app__skills-exp-works"
                >
                  {experience.works.map((work, index)=>(
              <div key={work.name + index}>
                <motion.div
                whileInView={{opacity: [0,1],}}
                transition={{duration: 0.5}}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
              </div>
            ))}
                </motion.div>
              </motion.div>
            ))}

            
        </motion.div>
      </div>
    </>
  );
};

export default Wrapper(MotionWrap(Skills, 'app__skills'), "skills", "app__whitebg");
