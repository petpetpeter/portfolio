import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsRef = useRef(null); // Create a ref for the projects container

  useEffect(() => {
    const container = projectsRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY; // Translate vertical scroll to horizontal
    };

    container.addEventListener("wheel", handleWheel);
    return () => {
      container.removeEventListener("wheel", handleWheel); // Cleanup on unmount
    };
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects} ref={projectsRef}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};