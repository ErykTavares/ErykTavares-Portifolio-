import React from 'react';
import { SkillItem } from '../style';

const SkillIcon = ({ label, Icon }) => (
	<SkillItem>
		<span className='tooltip'>{label}</span>
		<div className='iconWrapper'>
			<Icon />
		</div>
	</SkillItem>
);

export default SkillIcon;
