import React from 'react';

import styles from './styles.module.css';

import {FlexWrapper} from '../Shared/FlexWrapper';
import {SearchArea} from './SearchArea';

/**
 * Стартовая компонента приложения
 */
export const App: React.FC = () => {
	return (
		<FlexWrapper flexDirection="column" alignItems="stretch" className={styles.app}>
			<SearchArea />
		</FlexWrapper>
	);
};