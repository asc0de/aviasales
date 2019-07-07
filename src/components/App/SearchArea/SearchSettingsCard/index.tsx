import React from 'react';

import styles from './styles.module.css';

import {FlexWrapper} from '../../../Shared/FlexWrapper';
import {Card} from '../../../Shared/Card';
import {HopFilters} from './HopFilters';
import {SectionHeader} from './SectionHeader';

/**
 * Карточка настроек поиска билетов
 */
export const SearchSettingsCard: React.FC = () => (
	<Card>
		<FlexWrapper flexDirection="column" alignItems="stretch" className={styles['search-settings']}>
			<SectionHeader>Количество пересадок</SectionHeader>
			<HopFilters />
		</FlexWrapper>
	</Card>
);