import React from 'react';

import styles from './styles.module.css';

/**
 * Заголовок секции на карточке поиска
 */
export const SectionHeader: React.FC = ({children}) => (
	<span className={styles['section-header']}>{children}</span>
);