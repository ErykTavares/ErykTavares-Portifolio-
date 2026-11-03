import React from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsSectionStyle } from '../style';

import PageTitle from '../../../components/PageTitle';
import SkillIcon from './skillIcon';
import { skillsSvgList } from '../utils';

const SkillsSection = () => {
	const { t } = useTranslation();
	const skillsList = skillsSvgList.map((item) => <SkillIcon key={item.label} {...item} />);

	return (
		<>
			<PageTitle>{t('experience.skillsTitle')}</PageTitle>
			<SkillsSectionStyle className='animepop'>{skillsList}</SkillsSectionStyle>
		</>
	);
};

export default SkillsSection;
