import React from 'react';

import {RadioItem, RadioProps} from './types';

import styles from './styles.module.css';

/**
 * Компонета кастомного радиобаттона
 */
export const Radio: React.FC<RadioProps> = ({value, onChange, items}) => {
	/**
	 * Строит список кнопок радиобаттона
	 */
	const buildRadioButtonsList = () => items.map(({label, value: itemValue}: RadioItem) => (
		<span key={itemValue}>
			<input type="radio"
				id={itemValue}
				value={itemValue}
				onChange={onRadioChange}
				checked={value === itemValue}
				name="currency" />
			<label htmlFor={itemValue}>{label}</label>
		</span>
	));

	/**
	 * Обработчик изменения радиобаттона
	 */
	const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className={styles['radio-container']}>
			<fieldset>
				{buildRadioButtonsList()}
			</fieldset>
		</div>
	);
};