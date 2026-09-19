import styled from 'styled-components';

export const ExperienciaStyle = styled.section`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	padding-bottom: 0.5rem;

	@media screen and (max-width: 389px) {
		height: auto;
	}
`;

export const SkillsSectionStyle = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, auto));
	grid-gap: 1rem;
	place-items: center;
	margin: 3rem 0;
`;

export const SkillItem = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	perspective: 1000px;

	.iconWrapper {
		width: 150px;
		height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform-style: preserve-3d;
		transition: transform 0.5s ease;
	}

	svg {
		width: 150px;
		height: 150px;
		cursor: pointer;
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	&:hover .iconWrapper {
		transform: rotateY(180deg);
		filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.18));
	}

	.tooltip {
		position: absolute;
		top: -0.7rem;
		left: 50%;
		transform: translate(-50%, -6px);
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
		background: var(--red);
		color: #fff;
		font-size: 0.8rem;
		font-weight: 600;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.2s ease, transform 0.2s ease;
		z-index: 2;
	}

	&:hover .tooltip {
		opacity: 1;
		transform: translate(-50%, 0);
		font-weight: bold;
	}
`;
export const ExprienciaSectionStyle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
