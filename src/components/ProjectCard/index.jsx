import React from "react";
import Badge from "../Badge";
import Image from "../Image";
import { ProjectCardStyle } from "./style";

const ProjectCard = ({
  title,
  description,
  gif,
  link,
  category,
}) => {
  return (
    <ProjectCardStyle
      className="animepop"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={gif} alt="project-gif" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="row-badge">
          {category.map((item, index) => (
            <Badge key={index} lang={item} />
          ))}
        </div>
      </div>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
