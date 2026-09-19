import React, { useCallback, useEffect, useState } from 'react';
import { BadgeStyle } from './style';
import { bgcolorlist } from './utils';

const Badge = ({ lang }) => {
	const [bgcolor, setBgColor] = useState('');

	const onLabelStyle = useCallback(() => {
		const currentLangName = Object.keys(bgcolorlist).find((fin) => fin === lang.toLowerCase());

		setBgColor(bgcolorlist[currentLangName]);
	}, [lang]);

	useEffect(() => {
		onLabelStyle();
	}, [onLabelStyle]);

	return <BadgeStyle bgcolor={bgcolor}>{lang}</BadgeStyle>;
};

export default Badge;
