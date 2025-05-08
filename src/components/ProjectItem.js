import React from "react";

function ProjectItem({ id, name, about, technologies }) {

  const allProjectTechUsed = technologies.map((singleTechnology, index) => {
    return <span key={`${id}${index}`}>{singleTechnology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {allProjectTechUsed}
      </div>
    </div>
  );
}

export default ProjectItem;
