import React from 'react';

import styles from './styles.module.css';

import {CardProps} from './types';

/**
 * Белая карта-подложка
 */
export const Card: React.FC<CardProps> = ({children, className}) => (
	<div className={className ? `${styles.card} ${className}` : styles.card}>{children}</div>
);