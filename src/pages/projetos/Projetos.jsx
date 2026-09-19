import React from 'react';
import mock from './mock';
import { ProjectStyle, ProjectGridStyle } from './style';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import DefaultLayout from '../../layout/defaultLayout';

const projectListData = mock;

const Projetos = () => {
	const projectList = projectListData.map(({ name, description, gif, link, category }, index) => (
		<ProjectCard
			key={index}
			title={name}
			description={description}
			gif={gif}
			link={link}
			category={category}
		/>
	));

	return (
		<DefaultLayout>
			<ProjectStyle>
				<PageTitle>Projetos</PageTitle>
				<ProjectGridStyle>{projectList}</ProjectGridStyle>
			</ProjectStyle>
		</DefaultLayout>
	);
};

export default Projetos;
