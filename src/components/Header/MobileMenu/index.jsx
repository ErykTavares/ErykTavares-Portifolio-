import React, { useCallback, useEffect, useState } from 'react';
import { MenuMobileStyle } from './styled';

const Index = ({ children, active }) => {
	const [state, setState] = useState('none');

	const menuMobileClassName = active ? 'an-toBottom' : 'an-toTop';

	const onToggleActive = useCallback(() => {
		if (active) {
			setState('flex');
		} else if (!active) {
			setTimeout(() => setState('none'), 500);
		}
	}, [active]);

	useEffect(() => {
		onToggleActive();
	}, [onToggleActive]);

	return (
		<MenuMobileStyle state={state} className={menuMobileClassName}>
			{children}
		</MenuMobileStyle>
	);
};

export default Index;
