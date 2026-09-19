import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExperienciaRowStyle, RowCell } from './style';
import { ReactComponent as Work } from '../../assets/svg/work.svg';

const ExperienciaRow = ({ name, role, date, description }) => {
	const [inview, setInView] = useState(false);

	const { ref, inView } = useInView();

	const onInView = useCallback(() => {
		if (!inview && inView) {
			setInView(true);
		}
	}, [inView]);

	useEffect(() => {
		onInView();
	}, [onInView]);

	return (
		<ExperienciaRowStyle ref={ref} className={inview ? 'animepop' : ''}>
			<RowCell className='title'>
				<h3>{name}</h3>
				<h5>{`${role} | ${date}`}</h5>
			</RowCell>
			<div className='vr' />
			<RowCell className='svg'>
				<Work />
			</RowCell>
			<div className='vr ' />
			<RowCell className='description'>
				<p>{description}</p>
			</RowCell>
		</ExperienciaRowStyle>
	);
};

export default ExperienciaRow;
