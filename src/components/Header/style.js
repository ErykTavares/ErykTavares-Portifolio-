import styled from 'styled-components';

export const HeaderStyle = styled.header`
	width: 100%;
	max-width: 1366px;
	height: 100px;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--black);
	z-index: 2;

	.HeaderContent {
		width: 80%;
		height: 99%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	h1 {
		font-size: 2.5rem;
		transition: 0.5s;
		cursor: pointer;
		&:hover {
			color: var(--red);
		}
		@media screen and (max-width: 400px) {
			font-size: 2.2rem;
		}
	}

	.desktopMenu {
		@media screen and (max-width: 760px) {
			display: none;
		}
	}

	ul {
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 0.5rem;
	}

	a {
		font-size: 1.2rem;
		transition: 0.5s;
		&:hover {
			color: var(--red);
		}
	}

	.btn-menu {
		margin-top: 0.5rem;
		display: none;
		transition: 0.5s;

		&:hover rect {
			fill: var(--red);
		}
		@media screen and (max-width: 760px) {
			display: flex;
		}
	}

	.btn-menu rect {
		fill: white;
	}
`;
