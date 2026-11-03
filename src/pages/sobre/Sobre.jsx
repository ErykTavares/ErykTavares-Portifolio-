import React from 'react';
import { useTranslation } from 'react-i18next';
import { SobreStyle, SobreContentRight, SobreContentLeft } from './style';
import PageTitle from '../../components/PageTitle';

import Image from '../../components/Image';
import DefaultLayout from '../../layout/defaultLayout';
import { socialLinks } from './utils';

const Sobre = () => {
	const { t } = useTranslation();

	const linksList = socialLinks.map(({ key, href, Icon }) => (
		<a key={key} href={href} target='_blank' rel='noreferrer'>
			<Icon />
		</a>
	));

	return (
		<DefaultLayout>
			<SobreStyle>
				<div className='sobretitle'>
					<PageTitle>{t('about.title')}</PageTitle>
				</div>
				<div className='content'>
					<SobreContentLeft className='animeleft'>
						<div className='profile-img'>
							<Image
								src={`${process.env.PUBLIC_URL}./assets/img/profile-img.webp`}
								alt='profile-img'
							/>
						</div>
						<div className='socialmedia'>{linksList}</div>
						<h4>erictavares35@gmail.com</h4>
					</SobreContentLeft>
					<SobreContentRight className='animeright'>
						<h3>{t('about.presentationTitle')}</h3>
						<p>{t('about.paragraph1')}</p>
						<p>{t('about.paragraph2')}</p>
						<p>{t('about.paragraph3')}</p>
					</SobreContentRight>
				</div>
			</SobreStyle>
		</DefaultLayout>
	);
};

export default Sobre;
