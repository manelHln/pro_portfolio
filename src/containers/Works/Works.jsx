import React, { useState } from "react";
import "./Works.scss";
import { motion } from "framer-motion";
import Wrapper from "../../wrapper/Wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import { works } from "../../constants/data";
import { AiFillEye, AiFillGithub } from "../../constants/svgs";

const Works = () => {
  const [filterWork, setFilterWork] = useState(works);

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (activeFilter === "All") {
        setActiveFilter(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative<span> Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["Web App", "Mobile App", "React js", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__flex app__work-filter-item p-text ${
                activeFilter === item ? "item-active" : null
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_bank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_bank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Wrapper(
  MotionWrap(Works, "app__works"),
  "works",
  "app__primarybg"
);
