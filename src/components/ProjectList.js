import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const userProjects = projects.map(({ id, name, about, technologies }) => {
    return <ProjectItem key={id} id={id} name={name} about={about} technologies={technologies} />
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {userProjects}
      </div>
    </div>
  );
}

export default ProjectList;
