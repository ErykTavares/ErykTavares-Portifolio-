import React from "react";
import { ProjectCardStyle } from "./style";

function ProjectCard({
  title,
  description,
  gif,
  link,
}) {
  return (
    <ProjectCardStyle
      className="animepop"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={gif} alt="project-gif" />
    </ProjectCardStyle>
  );
}

export default ProjectCard;
