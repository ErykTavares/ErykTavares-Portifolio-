import React from 'react';
import { ExperienciaStyle, SkillsSectionStyle, ExprienciaSectionStyle } from './style';
import PageTitle from '../../components/PageTitle';
import ExperienciaRow from '../../components/ExperienciaRow';
import worklistmock from './mock';
import { ReactComponent as JavaScript } from '../../assets/svg/js cor normal.svg';
import { ReactComponent as Html } from '../../assets/svg/html cor normal.svg';
import { ReactComponent as Css } from '../../assets/svg/css cor normal.svg';
import { ReactComponent as Reactsvg } from '../../assets/svg/react cor normal.svg';
import { ReactComponent as StyledComponents } from '../../assets/svg/styledComponents.svg';
import { ReactComponent as Python } from '../../assets/svg/python cor normal.svg';
import { ReactComponent as Bootstrap } from '../../assets/svg/bootstrap cor normal.svg';
import { ReactComponent as TypeScriptSVg } from '../../assets/svg/tsSvg.svg';

const Experiencia = () => {
	const worklist = worklistmock;

	return (
		<ExperienciaStyle>
			<PageTitle>Skills</PageTitle>
			<SkillsSectionStyle className='animepop'>
				<JavaScript />
				<Html />
				<Css />
				<Reactsvg />
				<StyledComponents />
				<Python />
				<Bootstrap />
				<TypeScriptSVg />
			</SkillsSectionStyle>
			<ExprienciaSectionStyle>
				<PageTitle>Experiência</PageTitle>

				{worklist.map(({ name, date, description }, index) => (
					<ExperienciaRow key={index} name={name} date={date} description={description} />
				))}
			</ExprienciaSectionStyle>
		</ExperienciaStyle>
	);
};

export default Experiencia;
