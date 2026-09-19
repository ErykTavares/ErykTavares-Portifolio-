import React from 'react';
import { ExperienciaStyle, ExprienciaSectionStyle } from './style';
import PageTitle from '../../components/PageTitle';
import ExperienciaRow from '../../components/ExperienciaRow';
import worklistmock from './mock';

import DefaultLayout from '../../layout/defaultLayout';
import SkillsSection from './components/skillsSection';

const worklist = worklistmock;

const Experiencia = () => {
	const experienceList = worklist.map((item) => <ExperienciaRow key={item.name} {...item} />);

	return (
		<DefaultLayout>
			<ExperienciaStyle>
				<SkillsSection />
				<ExprienciaSectionStyle>
					<PageTitle>Experiência</PageTitle>

					{experienceList}
				</ExprienciaSectionStyle>
			</ExperienciaStyle>
		</DefaultLayout>
	);
};

export default Experiencia;
