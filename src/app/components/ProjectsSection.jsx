"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI-DinoGame",
    description:
      "The project consists of implementing the neural networks, so that the AI ​​learns to play the famous game of the dinosaur of the google browser.",
    image: "/images/projects/1.png",
    tag: ["All", "Python", "IA"],
    gitUrl: "https://github.com/Daniel-Ruiz-Gtz/AI-DinoGame",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "NextJs Portfolio",
    description:
      "Elevate your digital presence with my sleek and responsive personal portfolio. Explore my skills, projects, and journey in a fast, modern, and visually captivating environment.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Daniel-Ruiz-Gtz/DRG-Portfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Password-Generator",
    description:
      "A python program for generating strong passwords with a user-friendly interface. Ideal for creating secure passwords quickly.",
    image: "/images/projects/3.png",
    tag: ["All", "Python", "Automation"],
    gitUrl: "https://github.com/Daniel-Ruiz-Gtz/Password-Generator",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Multilayer-Perceptron",
    description:
      "Red neural multilayer for solving nonlinear classification problems",
    image: "/images/projects/4.png",
    tag: ["All", "Python", "IA"],
    gitUrl: "https://github.com/Daniel-Ruiz-Gtz/Multilayer-Perceptron",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IA"
          isSelected={tag === "IA"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Automation"
          isSelected={tag === "Automation"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
