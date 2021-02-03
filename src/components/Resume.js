import React from "react";
import dot from "../assets/icons/dot.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";

const languages = [
  {
    icon: dot,
    name: "ReactJs",
    level: "75",
  },
  {
    icon: dot,
    name: "JavaScript",
    level: "70",
  },
  {
    icon: dot,
    name: "HTML",
    level: "80",
  },
  {
    icon: dot,
    name: "JAVA",
    level: "70",
  },
  {
    icon: dot,
    name: "CSS",
    level: "80",
  },
  {
    icon: dot,
    name: "C++",
    level: "60",
  },
  {
    icon: dot,
    name: "MySQL",
    level: "70",
  },
  {
    icon: dot,
    name: "NodeJS",
    level: "70",
  },
];

const tools = [
  {
    icon: dot,
    name: "Eclipse",
    level: "70",
  },
  {
    icon: dot,
    name: "VS Code",
    level: "80",
  },
  {
    icon: dot,
    name: "MS Office",
    level: "75",
  },
  {
    icon: dot,
    name: "Sublime",
    level: "75",
  },
  {
    icon: dot,
    name: "Windows OS",
    level: "85",
  },
];

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">BTech(CSE) | 2016-20</h5>
            <p className="resume-card__name">
              SRM Institute of Science and Technology, Chennai
            </p>
            <h5 className="resume-card__title">Higher Secondary | 2016</h5>
            <p className="resume-card__name">KV Shalimar Bagh, Delhi</p>
            {/* <p className="resume-card__details"></p> */}
          </div>
        </div>

        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Winternship</h5>
            <p className="resume-card__name">Infosys Limited</p>
            <h5 className="resume-card__title">Internship</h5>
            <p className="resume-card__name">
              Ministry of Electronics and Information Technology
            </p>
            {/* <p className="resume-card__details">Details Section</p> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((Language) => (
              <Bar value={Language} />
            ))}
          </div>
        </div>

        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Tools and Software</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
