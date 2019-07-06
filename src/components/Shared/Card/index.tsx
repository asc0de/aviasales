import React from 'react';

import styles from './styles.module.css';

import {CardProps} from './types';

/**
 * Белая карта-подложка
 */
export const Card: React.FC<CardProps> = ({children}) => (
	<div className={styles.card}>{children}</div>
);