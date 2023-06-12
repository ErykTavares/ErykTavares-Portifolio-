import React, { useEffect, useState } from 'react';
import { MenuMobileStyle } from './styled';

const Index = ({ children, active }) => {
	const [state, setState] = useState('none');

	useEffect(() => {
		if (active) {
			setState('flex');
		} else if (!active) {
			setTimeout(() => setState('none'), 500);
		}
	}, [active]);

	return (
		<MenuMobileStyle state={state} className={active ? 'an-toBottom' : 'an-toTop'}>
			{children}
		</MenuMobileStyle>
	);
};

export default Index;
