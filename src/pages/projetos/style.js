import styled from 'styled-components';

export const ProjectStyle = styled.section`
	height: calc(100vh - 60px + 620px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	@media screen and (max-width: 1300px) {
		height: 1450px;
	}
	@media screen and (max-width: 1150px) {
		height: auto;
	}

	h2 {
		margin-bottom: 1rem;
	}
`;

export const ProjectGridStyle = styled.div`
	width: 80%;
	min-width: 300px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	place-items: center;
	gap: 1rem;
	margin: 1.5rem 0;
`;
