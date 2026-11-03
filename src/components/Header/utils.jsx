import { NavLink } from 'react-router-dom';

export const navLinksList = (t) => (
	<ul>
		<li>
			<NavLink to='/home'>{t('nav.home')}</NavLink>
		</li>
		<li>
			<NavLink to='/sobre'>{t('nav.about')}</NavLink>
		</li>
		<li>
			<NavLink to='/experiencia'>{t('nav.experience')}</NavLink>
		</li>
		<li>
			<NavLink to='/projetos'>{t('nav.projects')}</NavLink>
		</li>
	</ul>
);
