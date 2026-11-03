import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterStyle } from './style';

const Footer = () => {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<FooterStyle>
			<h6>{t('footer.copyright', { year })}</h6>
		</FooterStyle>
	);
};

export default Footer;
