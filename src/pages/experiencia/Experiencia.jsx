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
import { ReactComponent as NextSvg } from '../../assets/svg/next-js-icon-seeklogo.com.svg';
import { ReactComponent as RectNativeSvg } from '../../assets/svg/react-native-1.svg';
import { ReactComponent as ReduxSvg } from '../../assets/svg/redux-svgrepo-com.svg';
import { ReactComponent as TailwindSvg } from '../../assets/svg/Tailwind_CSS_Logo 1.svg';

const worklist = worklistmock;
const Experiencia = () => (
	<ExperienciaStyle>
		<PageTitle>Skills</PageTitle>
		<SkillsSectionStyle className='animepop'>
			<Reactsvg />
			<JavaScript />
			<TypeScriptSVg />
			<Html />
			<Css />
			<NextSvg />
			<RectNativeSvg />
			<ReduxSvg />
			<StyledComponents />
			<Python />
			<Bootstrap />
			<TailwindSvg />
		</SkillsSectionStyle>
		<ExprienciaSectionStyle>
			<PageTitle>Experiência</PageTitle>

			{worklist.map(({ name, date, description }, index) => (
				<ExperienciaRow key={index} name={name} date={date} description={description} />
			))}
		</ExprienciaSectionStyle>
	</ExperienciaStyle>
);

export default Experiencia;
