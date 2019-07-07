import React from 'react';

import styles from './styles.module.css';

import {CheckboxProps} from './types';

/**
 * Кастомный чекбокс
 */
export const Checkbox: React.FC<CheckboxProps> = ({onClick, checked}) => (
	<label className={styles['checkbox-container']}>
		<input type="checkbox" checked={checked} onChange={onClick}/>
		<span className={styles.checkmark}></span>
	</label>
);