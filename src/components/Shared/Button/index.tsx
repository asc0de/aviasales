import React from 'react';

import styles from './styles.module.css';

import {ButtonProps} from './types';

/**
 * Кастомная кнопка
 */
export const Button: React.FC<ButtonProps> = ({children}) => (
	<button className={styles['action-button']}>{children}</button>
);