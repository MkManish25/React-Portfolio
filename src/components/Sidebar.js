import React from "react";
import facebookc from "../assets/icons/facebookc.svg";
import instagramc from "../assets/icons/instagramc.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import portrait from "../assets/icons/portrait.jpg";
import linkedin from "../assets/icons/linkedin.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import gmail from "../assets/icons/gmail.svg";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:manishk1998k@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img
        src={portrait}
        alt="avatar"
        className="sidebar__avatar
        rounded-circle"
      />
      <div className="sidebar__name">
        Manish<span className="sidebar__surname">&nbsp;Kumar</span>
      </div>
      <div className="sidebar__item sidebar__title my-2">
        Full Stack Developer
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar_picon mr-2" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social -icons my-2 ">
        <a href="">
          <img src={facebookc} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <img
            src={instagramc}
            alt="Instagram"
            className="sidebar__icon mr-3"
          />
        </a>
        <a href="">
          <img src={linkedin} alt="LinkdIn" className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <img src={github} alt="github" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        {/* <div className="sidebar__item sidebar__github">
          <a href="">
            <img src={github} alt="github" className="sidebar__icon mr-2" />
            Github
          </a>
        </div> */}
        <div className="sidebar__location my-3">
          <img src={pin} alt="location" className="sidebar_picon mr-1" />
          Delhi, India
        </div>
        <div className="sidebar__item my-3">manishk1998k@gmail.com</div>
        <div className="sidebar__item my-3 ">+91 8506904273</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        <img src={gmail} alt="gmail" className="sidebar__icon" /> &nbsp; Email
        me
      </div>
    </motion.div>
  );
};

export default Sidebar;
