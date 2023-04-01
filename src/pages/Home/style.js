import styled from 'styled-components';

export const HomeStyle = styled.section`
	height: calc(100vh - 60px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 1300px) {
		height: 1300px;
		flex-direction: column;
		justify-content: start;
	}
`;

export const HomeContentRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 1037px) {
		width: 100%;
	}

	.rContentTitle {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1.8rem 0;
	}

	.rContentTitle h2 {
		font-size: 4.8rem;
		@media screen and (max-width: 526px) {
			font-size: 3.2rem;
		}
		@media screen and (max-width: 360px) {
			font-size: 2.8rem;
		}
	}

	.rContentTitle h4 {
		font-size: 1.8rem;
		@media screen and (max-width: 526px) {
			font-size: 1.2rem;
		}
		@media screen and (max-width: 526px) {
			font-size: 1rem;
		}
	}

	.rContentButtons {
		width: 100%;
		max-width: 330px;
		height: 130px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 1.8rem 0;
		@media screen and (max-width: 440px) {
			height: 200px;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: space-evenly;
		}

		a {
			flex-grow: 1;
		}
		a:first-child {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-grow: 2;
			margin: 0 17px;
		}

		a:nth-child(2) {
			margin-right: 0.8rem;
			@media screen and (max-width: 440px) {
				margin-right: 0;
			}
		}
	}
`;
export const HomeContentLeft = styled.div`
	min-width: 300px;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 15px;
	@media screen and (max-width: 1300px) {
		width: 100%;
		margin-bottom: 1rem;
	}
`;
