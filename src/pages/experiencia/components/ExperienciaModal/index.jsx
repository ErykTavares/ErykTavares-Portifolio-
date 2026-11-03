import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Backdrop, HeaderContent, HeaderWrapper, ModalBox } from './style';
import Button from '../../../../components/Buttons';

const ExperienciaModal = ({ isOpen, onClose, name, role, date, description }) => {
	const { t } = useTranslation();

	const onPressEscape = useCallback(
		(event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (!isOpen) {
			return undefined;
		}

		const bodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		document.addEventListener('keydown', onPressEscape);

		return () => {
			document.body.style.overflow = bodyOverflow;
			document.removeEventListener('keydown', onPressEscape);
		};
	}, [isOpen, onPressEscape]);

	if (!isOpen) {
		return null;
	}

	return (
		<Backdrop
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-label={t('experience.modal.detailsAria', { name })}
		>
			<ModalBox onClick={(event) => event.stopPropagation()}>
				<HeaderWrapper>
					<HeaderContent>
						<h2>{name}</h2>
						<h4>{`${role} | ${date}`}</h4>
					</HeaderContent>
					<Button
						width={20}
						height={20}
						type='button'
						onClick={onClose}
						aria-label={t('experience.modal.closeAria')}
					>
						×
					</Button>
				</HeaderWrapper>

				<p>{description}</p>
			</ModalBox>
		</Backdrop>
	);
};

export default ExperienciaModal;
