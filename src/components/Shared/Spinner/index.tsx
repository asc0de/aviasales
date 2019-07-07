import React from 'react';

import styles from './styles.module.css';

import {SpinnerProps} from './types';

import {SpinnerSize} from './config';

/**
 * Простой спиннер
 */
export const Spinner: React.FC<SpinnerProps> = ({size = SpinnerSize.L}) => {
	const classes = size !== SpinnerSize.L
		? `${styles.spinner} ${styles[size]}`
		: styles.spinner;

	return (
		<div className={classes}></div>
	);
}