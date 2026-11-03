import React from 'react';
import { useTranslation } from 'react-i18next';
import { projectsByLang } from './mock';
import { ProjectStyle, ProjectGridStyle } from './style';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import DefaultLayout from '../../layout/defaultLayout';

const Projetos = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
	const projectListData = projectsByLang[currentLanguage] || projectsByLang.pt;

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
				<PageTitle>{t('projects.title')}</PageTitle>
				<ProjectGridStyle>{projectList}</ProjectGridStyle>
			</ProjectStyle>
		</DefaultLayout>
	);
};

export default Projetos;
