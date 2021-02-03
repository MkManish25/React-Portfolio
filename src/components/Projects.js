import React from "react";
import ProjectCard from "./ProjectCard";
import data_projects from "./data/projects_data";
import { motion } from "framer-motion";

const Projects = () => {
  const project_variants = {
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
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        {data_projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
