import styled from 'styled-components';

export const ButtonStyle = styled.button`
	width: ${({ width }) => (width ? `${width}px` : '150px')};
	height: ${({ height }) => (height ? `${height}px` : '50px')};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border: 3px solid transparent;
	border-radius: 15px;
	background-image: ${({ bgcolor }) =>
		bgcolor
			? null
			: 'linear-gradient(var(--black), var(--black)),radial-gradient(circle at top left, var(--red), var(--blue))'};
	background-origin: border-box;
	background-clip: content-box, border-box;
	font-size: 1.1rem;
	cursor: pointer;
	transition: 0.5s;
	background-color: ${({ bgcolor }) => bgcolor || null};
	&:hover {
		transform: scale(1.2);
		color: var(--red);
	}

	.svgbtn {
		width: 35px;
		height: 35px;
	}
`;
