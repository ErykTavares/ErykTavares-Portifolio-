import styled from 'styled-components';

export const BadgeStyle = styled.div`
	width: auto;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ bgcolor }) => bgcolor};
`;
