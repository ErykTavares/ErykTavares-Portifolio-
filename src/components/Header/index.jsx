import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Line from '../Line';
import { HeaderStyle } from './style';
import { ReactComponent as Mobile } from '../../assets/svg/MenuMobile.svg';
import Button from '../Buttons/index';
import MenuMobile from './MobileMenu/index';

const Header = () => {
	const [menuMobile, setMenuMobile] = useState(false);

	const location = useLocation();

	const navlinks = (
		<ul>
			<li>
				<NavLink to='/home'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/sobre'>Sobre</NavLink>
			</li>
			<li>
				<NavLink to='/experiencia'>Experiência</NavLink>
			</li>
			<li>
				<NavLink to='/projetos'>Projetos</NavLink>
			</li>
		</ul>
	);

	const handleClick = () => {
		setMenuMobile(!menuMobile);
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
				<nav className='desktopMenu'>{navlinks}</nav>
				<MenuMobile className='menumobile' active={menuMobile}>
					{navlinks}
				</MenuMobile>
			</div>
			<Line />
		</HeaderStyle>
	);
};

export default Header;
