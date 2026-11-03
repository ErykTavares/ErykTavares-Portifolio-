import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienciaStyle, ExprienciaSectionStyle } from './style';
import PageTitle from '../../components/PageTitle';
import ExperienciaRow from './components/ExperienciaRow';
import { worklistByLang } from './mock';

import DefaultLayout from '../../layout/defaultLayout';
import SkillsSection from './components/skillsSection';

const Experiencia = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
	const worklist = worklistByLang[currentLanguage] || worklistByLang.pt;

	const experienceList = worklist.map((item) => <ExperienciaRow key={item.name} {...item} />);

	return (
		<DefaultLayout>
			<ExperienciaStyle>
				<SkillsSection />
				<ExprienciaSectionStyle>
					<PageTitle>{t('experience.title')}</PageTitle>

					{experienceList}
				</ExprienciaSectionStyle>
			</ExperienciaStyle>
		</DefaultLayout>
	);
};

export default Experiencia;
