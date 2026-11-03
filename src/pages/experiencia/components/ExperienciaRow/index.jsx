import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExperienciaRowStyle, RowCell } from './style';
import { ReactComponent as Work } from '../../../../assets/svg/work.svg';
import useDisclosure from '../../../../shared/hooks/useDisclosure';
import ExperienciaModal from '../ExperienciaModal';

const ExperienciaRow = ({ name, role, date, description, detailedDescription }) => {
	const [inview, setInView] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { ref, inView } = useInView();

	const onInView = useCallback(() => {
		if (!inview && inView) {
			setInView(true);
		}
	}, [inView]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onOpen();
		}
	};

	useEffect(() => {
		onInView();
	}, [onInView]);

	return (
		<>
			<ExperienciaRowStyle
				ref={ref}
				className={inview ? 'animepop' : ''}
				onClick={onOpen}
				onKeyDown={handleKeyDown}
				role='button'
				tabIndex={0}
			>
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

			<ExperienciaModal
				isOpen={isOpen}
				onClose={onClose}
				name={name}
				role={role}
				date={date}
				description={detailedDescription || description}
			/>
		</>
	);
};

export default ExperienciaRow;
