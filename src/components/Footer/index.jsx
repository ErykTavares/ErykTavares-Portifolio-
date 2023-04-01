import React from 'react';
import { FooterStyle } from './style';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<FooterStyle>
			<h6>copyright &copy; {year} - ErykTavares</h6>
		</FooterStyle>
	);
};

export default Footer;
