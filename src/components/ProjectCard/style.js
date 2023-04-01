import styled from 'styled-components';

export const ProjectCardStyle = styled.a`
	position: relative;
	width: 300px;
	height: 220px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	border: 2px solid transparent;
	border-radius: 1rem;
	background-image: linear-gradient(var(--black), var(--black)),
		radial-gradient(circle at top left, var(--red), var(--blue));
	background-origin: border-box;
	background-clip: content-box, border-box;
	overflow: hidden;
	&:hover {
		img {
			transform: scale(1.2);
			opacity: 0.5;
		}
		.card-content {
			opacity: 1;
			transform: translateY(0%);
			background: rgba(0, 0, 0, 0.36);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(2px);
			-webkit-backdrop-filter: blur(8px);
			border: 1px solid rgba(0, 0, 0, 0.15);
		}
	}

	h3 {
		z-index: 1;
		margin-bottom: 1rem;
	}

	p {
		z-index: 1;
		text-align: justify;
		padding: 0 0.35rem;
		margin-bottom: 0.5rem;
		hyphens: auto;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	article {
		position: absolute;
	}

	img {
		width: 300px;
		height: 220px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		transition: 0.5s;
	}

	.card-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: translateY(150%);
		transition: 1s;
	}

	.row-badge {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		z-index: 1;
		div {
			z-index: 1;
		}
	}
`;
