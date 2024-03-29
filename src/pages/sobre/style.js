import styled from 'styled-components';

export const SobreStyle = styled.section`
	height: calc(100vh - 60px + 200px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	@media screen and (max-width: 890px) {
		height: 1300px;
	}

	.sobretitle {
		margin-top: 1.5rem;
	}

	.content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5rem;
		@media screen and (max-width: 890px) {
			flex-direction: column;
			gap: 0;
		}
	}
`;
export const SobreContentLeft = styled.div`
	width: 50%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 3rem;
	@media screen and (max-width: 890px) {
		margin-bottom: 0;
	}

	.profile-img {
		article {
			.skeleton {
				border-radius: 50%;
			}
		}
		img {
			border: 3px solid transparent;
			border-radius: 50%;
			cursor: pointer;
			background-image: linear-gradient(var(--black), var(--black)),
				radial-gradient(circle at top left, var(--red), var(--blue));
			background-origin: border-box;
			background-clip: content-box, border-box;
			transform-style: preserve-3d;
			transition: 0.8s;
			cursor: pointer;
			&:hover {
				transform: rotateY(180deg);
			}
		}
	}

	.socialmedia {
		width: 255px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		& a {
			transition: 0.5s;
		}
		& a:hover {
			transform: scale(1.2);
		}
	}
`;
export const SobreContentRight = styled.div`
	width: 50%;
	height: 550px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	@media screen and (max-width: 890px) {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		width: 98%;
	}

	h3 {
		font-size: 2rem;
	}

	p {
		align-self: start;
		text-align: justify;
		font-size: 1.1rem;
		hyphens: auto;

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}
	}
`;
