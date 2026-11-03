import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Line from '../Line';
import { HeaderStyle } from './style';
import { ReactComponent as Mobile } from '../../assets/svg/MenuMobile.svg';
import Button from '../Buttons/index';
import MenuMobile from './MobileMenu/index';
import { navLinksList } from './utils';

const Header = () => {
	const [menuMobile, setMenuMobile] = useState(false);
	const { t, i18n } = useTranslation();

	const location = useLocation();

	const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
	const isCurrentLanguagePT = currentLanguage === 'pt';
	const navLinks = navLinksList(t);

	const handleClick = () => {
		setMenuMobile(!menuMobile);
	};

	const handleLanguageToggle = () => {
		i18n.changeLanguage(isCurrentLanguagePT ? 'en' : 'pt').catch(() => undefined);
	};

	useEffect(() => {
		setMenuMobile(false);
	}, [location]);

	return (
		<HeaderStyle>
			<div className='HeaderContent'>
				<NavLink to='/home'>
					<h1>ErykTavares</h1>
				</NavLink>
				<Button
					bgcolor='transparent'
					width='30'
					height='30'
					// eslint-disable-next-line
					onClick={handleClick}
				>
					<Mobile className={menuMobile ? 'btn-menu active' : 'btn-menu disabled'} />
				</Button>
				<nav className='desktopMenu'>{navLinks}</nav>
				<MenuMobile className='menumobile' active={menuMobile}>
					{navLinks}
				</MenuMobile>
				<button className='lang-switch' type='button' onClick={handleLanguageToggle}>
					{isCurrentLanguagePT ? 'PT' : 'EN'}
				</button>
			</div>
			<Line />
		</HeaderStyle>
	);
};

export default Header;
