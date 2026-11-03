import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.72);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export const ModalBox = styled.div`
	position: relative;
	width: 100%;
	max-width: 760px;
	max-height: 85vh;
	overflow-y: auto;
	background: var(--black200);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 12px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
	padding: 1.5rem;

	h2 {
		font-size: 1.35rem;
		margin-bottom: 0.25rem;
	}

	h4 {
		color: gray;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.7;
		white-space: pre-line;
	}
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

export const HeaderContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const CloseIconButton = styled.button`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	width: 34px;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 8px;
	background: transparent;
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}
`;
