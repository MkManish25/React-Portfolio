import React from "react";
import api from "../assets/icons/api.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";

import Skillcard from "./Skillcard";
import { motion } from "framer-motion";

const skills = [
  {
    icon: computer,
    title: "Frontend Development ",
    about: "Build a beautiful and scalable using HTML, CSS and ReactJs ",
  },
  {
    icon: api,
    title: "UI/UX development",
    about: "Minimalistic user interface design using BootStrap and Framer",
  },
  {
    icon: repair,
    title: "Backend Development",
    about: "Handle Database, server and API using MySQL",
  },
  {
    icon: algo,
    title: "Teamwork",
    about: "Guiding and supporting team on application upgrade",
  },
];
const About = () => {
  const about_variants = {
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
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
    >
      <h6 className="about__intro">
        &nbsp;&nbsp;I describe my self as someone who is persistent, a quick
        learner and loves problem solving by using &nbsp;&nbsp;simple and
        scalable solutions.
      </h6>
      <h6 className="about__heading">&nbsp;&nbsp;&nbsp;&nbsp;What I offer</h6>/
      <div className="container about__container">
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
