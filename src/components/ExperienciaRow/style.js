import styled from 'styled-components';

export const ExperienciaRowStyle = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 3rem 0;
	@media screen and (max-width: 920px) {
		height: 300px;
		flex-direction: column-reverse;
		justify-content: space-around;
		margin: 1rem 0;
	}

	.title {
		@media screen and (max-width: 920px) {
			order: 1;
		}
	}

	.svg {
		width: 60px;
		@media screen and (max-width: 920px) {
			order: 1;
		}
	}

	.vr {
		width: 2px;
		height: 100px;
		background-image: linear-gradient(to bottom, var(--red), var(--blue));
		@media screen and (max-width: 920px) {
			display: none;
		}
	}
`;
export const RowCell = styled.div`
	width: 300px;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: justify;

	h3 {
		font-size: 1.2rem;
	}

	h5 {
		color: gray;
	}

	svg {
		width: 60px;
		height: 60px;
	}

	p {
		word-break: break-all;
		@media screen and (max-width: 450px) {
			padding: 0 1.4rem;
		}
	}
`;
