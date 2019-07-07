import React from 'react';

import styles from './styles.module.css';

import {FlexWrapper} from '../../Shared/FlexWrapper';
import {SearchSettingsCard} from './SearchSettingsCard';
import {TicketsList} from './TicketsList';
import {LogoContainer} from './LogoContainer';

/**
 * Компонента, содержащая зону поиска
 */
export const SearchArea: React.FC = () => (
	<FlexWrapper
		flexDirection="column"
		justifyContent="start"
		alignItems="stretch"
		className={styles['search-area']}
	>
		<LogoContainer />
		<FlexWrapper className={styles['search-area-content']} alignItems="flex-start">
			<SearchSettingsCard />
			<TicketsList />
		</FlexWrapper>
	</FlexWrapper>
);