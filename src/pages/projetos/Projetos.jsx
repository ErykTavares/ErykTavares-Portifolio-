import React from "react";
import mock from "./mock";
import {
  ProjectStyle,
  ProjectGridStyle,
} from "./style";
import PageTitle from "../../components/PageTitle";
import ProjectCard from "../../components/ProjectCard";

const Projetos = () => {
  const projectlist = mock;
  return (
    <ProjectStyle>
      <PageTitle>Projetos</PageTitle>
      <ProjectGridStyle>
        {projectlist.map(
          (
            {
              name,
              description,
              gif,
              link,
              category,
            },
            index,
          ) => (
            <ProjectCard
              key={index}
              title={name}
              description={description}
              gif={gif}
              link={link}
              category={category}
            />
          ),
        )}
      </ProjectGridStyle>
    </ProjectStyle>
  );
};

export default Projetos;
