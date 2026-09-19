import React from 'react';
import { SkillsSectionStyle } from '../style';

import PageTitle from '../../../components/PageTitle';
import SkillIcon from './skillIcon';
import { skillsSvgList } from '../utils';

const SkillsSection = () => {
	const skillsList = skillsSvgList.map((item) => <SkillIcon key={item.label} {...item} />);

	return (
		<>
			<PageTitle>Skills</PageTitle>
			<SkillsSectionStyle className='animepop'>{skillsList}</SkillsSectionStyle>
		</>
	);
};

export default SkillsSection;
