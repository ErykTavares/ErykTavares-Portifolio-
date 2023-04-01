import React from 'react';
import { ButtonStyle } from './style';

const Button = ({ children, onClick, bgcolor, width, height }) => (
	<ButtonStyle bgcolor={bgcolor} width={width} height={height} onClick={onClick}>
		{children}
	</ButtonStyle>
);

export default Button;
