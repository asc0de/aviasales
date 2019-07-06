import React from 'react';

import styles from './styles.module.css';

import {FlexWrapper} from '../../../Shared/FlexWrapper';
import {Logo} from './Logo';

/**
 * Контейнер для лого сайта
 */
export const LogoContainer: React.FC = () => ((
	<FlexWrapper className={styles['logo-container']}>
		<Logo />
	</FlexWrapper>
));