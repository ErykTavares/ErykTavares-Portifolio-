import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeStyle, HomeContentLeft, HomeContentRight } from './style';
import { ReactComponent as Tecnologia } from '../../assets/svg/tencologia.svg';
import Button from '../../components/Buttons/index';
import { ReactComponent as Download } from '../../assets/svg/download.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/Linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/svg/Github.svg';
import DefaultLayout from '../../layout/defaultLayout';

const Home = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
	const cvFileName =
		currentLanguage === 'en' ? 'EricTavares-CV-English.pdf' : 'EricTavares-CV.pdf';

	return (
		<DefaultLayout>
			<HomeStyle>
				<HomeContentLeft className='animeleft'>
					<Tecnologia className='img-fluid' />
				</HomeContentLeft>
				<HomeContentRight className='animeright'>
					<div className='rContentTitle'>
						<h2>{t('home.name')}</h2>
						<h4>{t('home.role')}</h4>
					</div>
					<div className='rContentButtons'>
						<a
							href={`${process.env.PUBLIC_URL}/assets/download/${cvFileName}`}
							download
						>
							<Button>
								<Download />
								{t('home.resume')}
							</Button>
						</a>
						<a
							href='https://www.linkedin.com/in/eryk-t-7879a7ba/'
							target='_blank'
							rel='noreferrer'
						>
							<Button>
								<Linkedin className='svgbtn' />
								{t('home.linkedin')}
							</Button>
						</a>
						<a href='https://github.com/ErykTavares' target='_blank' rel='noreferrer'>
							<Button>
								<GitHub className='svgbtn' />
								{t('home.github')}
							</Button>
						</a>
					</div>
				</HomeContentRight>
			</HomeStyle>
		</DefaultLayout>
	);
};

export default Home;
