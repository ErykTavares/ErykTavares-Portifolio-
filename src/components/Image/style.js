import styled from 'styled-components';

export const WrapperStyle = styled.article`
	width: 100%;
	height: 100%;
	display: grid;

	.image {
		max-width: 100%;
		display: block;
		grid-area: 1/1;
		opacity: 0;
		transition: 0.2s;
	}

	.skeleton {
		height: 100%;
		grid-area: 1/1;
		background-image: linear-gradient(90deg, #eee4 0px, #fff 50%, #eee4 100%);
		background-color: #eee4;
		background-size: 200%;
		animation: skeletonAnimation 1.5s infinite linear;
	}

	@keyframes skeletonAnimation {
		from {
			background-position: 0px;
		}
		to {
			background-position: -200%;
		}
	}
`;
