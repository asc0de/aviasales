import React from 'react';

import styles from './styles.module.css';

import {FlightInfoProps} from './types';

import {FlightInfoAlign} from './config';

import {FlexWrapper} from '../../../../../Shared/FlexWrapper';
import {getTicketFormatDate} from './helpers';

/**
 * Блок информации отправления / прибытия
 */
export const FlightInfo: React.FC<FlightInfoProps> = ({align, date, time, city, cityName}) => (
	<FlexWrapper
		flexDirection="column"
		alignItems={align === FlightInfoAlign.Left ? 'flex-start' : 'flex-end'}
		className={styles['flight-info']}
	>
		<span className={styles.time}>{time}</span>
		{align === FlightInfoAlign.Left && <span className={styles.city}>{city}, {cityName}</span>}
		{align === FlightInfoAlign.Right && <span className={styles.city}>{cityName}, {city}</span>}
		<span className={styles.date}>{getTicketFormatDate(date)}</span>
	</FlexWrapper>
);