import React from 'react';

import styles from './styles.module.css';
import airplaneIcon from './airplane.svg';

import {FlightRowProps} from './types';

import {pluralizeStops} from '../../../../../../helpers';

import {FlexWrapper} from '../../../../../Shared/FlexWrapper';

/**
 * Строка перелета с пересадками
 */
export const FlightRow: React.FC<FlightRowProps> = ({stops}) => (
	<FlexWrapper
		flexDirection="column"
		justifyContent="start"
		className={styles['flight-row-container']}
	>
		<span className={styles['stops-title']}>{pluralizeStops(stops)}</span>
		<FlexWrapper className={styles['flight-row']}>
			<span className={styles['flight-row-line']}></span>
			<img src={airplaneIcon} alt="самолет" className={styles.airplane}/>
		</FlexWrapper>
	</FlexWrapper>
);