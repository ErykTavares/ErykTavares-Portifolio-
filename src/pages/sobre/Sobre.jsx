import React from 'react';
import { SobreStyle, SobreContentRight, SobreContentLeft } from './style';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as Instagramsvg } from '../../assets/svg/Instagram.svg';
import { ReactComponent as Youtubesvg } from '../../assets/svg/youtube.svg';
import { ReactComponent as Whatsappsvg } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as Discordsvg } from '../../assets/svg/discord-svgrepo-com.svg';
import Image from '../../components/Image';

const Sobre = () => (
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
				<div className='socialmedia'>
					<a
						href='https://www.instagram.com/lord_eryktavares/?hl=pt-br'
						target='_blank'
						rel='noreferrer'
					>
						<Instagramsvg />
					</a>
					<a
						href='https://www.youtube.com/channel/UCvLrUAMzmxB-H0iK8H7ReQg'
						target='_blank'
						rel='noreferrer'
					>
						<Youtubesvg />
					</a>
					<a
						href='http://api.whatsapp.com/send?phone=557591952463'
						target='_blank'
						rel='noreferrer'
					>
						<Whatsappsvg />
					</a>
					<a
						href='https://discord.com/users/859431514449379358'
						target='_blank'
						rel='noreferrer'
					>
						<Discordsvg />
					</a>
				</div>
				<h4>erictavares35@gmail.com</h4>
			</SobreContentLeft>
			<SobreContentRight className='animeright'>
				<h3>Apresentação</h3>
				<p>
					Desenvolvedor Front-end com experiência em React, TypeScript, Javascript,
					StyledComponentes, Html, Css, Sass, Bootstrap;
				</p>
				<p>Atualmente trabalhando como Desenvolvedor Front-End Freelancer;</p>
				<p>Tenho interesse em ser um Desenvolvedor FullStack;</p>
				<p>
					Sou apaixonado pela área de tecnologia, venho mexendo em computadores desde 2011
					que foi quando eu ganhei meu primeiro notebook, dês dessa época eu tenho
					interesse na área de programação. Entusiasta em UI UX e edição de vídeo, curto
					muito jogos, animes, mangás, leitura e esportes principalmente calistenia, eles
					são minhas atividades nas horas que eu não estou trabalhando ou estudando.
					Atualmente estudando como autodidata, inglês, Programação.
				</p>
			</SobreContentRight>
		</div>
	</SobreStyle>
);

export default Sobre;
