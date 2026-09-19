import React from 'react';
import { SobreStyle, SobreContentRight, SobreContentLeft } from './style';
import PageTitle from '../../components/PageTitle';

import Image from '../../components/Image';
import DefaultLayout from '../../layout/defaultLayout';
import { socialLinks } from './utils';

const Sobre = () => {
	const linksList = socialLinks.map(({ key, href, Icon }) => (
		<a key={key} href={href} target='_blank' rel='noreferrer'>
			<Icon />
		</a>
	));

	return (
		<DefaultLayout>
			<SobreStyle>
				<div className='sobretitle'>
					<PageTitle>Sobre</PageTitle>
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
						<h3>Apresentação</h3>
						<p>
							Software Engineer com experiência em desenvolvimento Front-End e Mobile,
							atuando principalmente com React, React Native, TypeScript, JavaScript e
							Next.js. Experiência no desenvolvimento e evolução de aplicações web e
							mobile, Design Systems, Microfrontends, refatoração de sistemas legados,
							integração com APIs, gerenciamento de estado, otimização de performance
							e desenvolvimento de componentes reutilizáveis.
						</p>
						<p>
							Experiência com React Query, TanStack Query, Redux, Context API, Axios,
							Tailwind CSS, Material UI, Expo e WebSocket. Atuação em projetos de
							migração tecnológica, modernização de aplicações, arquitetura de
							componentes, melhoria de código, testes automatizados, CI/CD e Code
							Review.
						</p>
						<p>
							Atualmente expandindo conhecimentos em desenvolvimento Full Stack com
							Node.js, Express.js e NestJS, buscando atuar na construção de aplicações
							web e mobile robustas, escaláveis e de fácil manutenção. Experiência no
							uso de ferramentas de AI Coding, incluindo GitHub Copilot, Cursor,
							Claude e OpenAI Codex.
						</p>
					</SobreContentRight>
				</div>
			</SobreStyle>
		</DefaultLayout>
	);
};

export default Sobre;
