import React from 'react';

import styles from './styles.module.css';

import {TicketProps} from './types';

import {displayCurrency} from '../../../../../helpers';

import {FlightInfoAlign} from './FlightInfo/config';

import {Card} from '../../../../Shared/Card';
import {AirlineLogo} from '../../../../Shared/AirlineLogo';
import {FlexWrapper} from '../../../../Shared/FlexWrapper';
import {Button} from '../../../../Shared/Button';
import {FlightRow} from './FlightRow';
import {FlightInfo} from './FlightInfo';

/**
 * Карточка билета
 */
export const Ticket: React.FC<TicketProps> = ({ticket, rate, currency}) => {
	const {
		price,
		stops,
		carrier,
		departureDate,
		departureTime,
		arrivalDate,
		arrivalTime,
		originName,
		origin,
		destinationName,
		destination
	} = ticket;

	const actualPrice = price * rate;

	return (
		<Card className={styles['ticket-wrapper']}>
			<FlexWrapper alignItems="stretch" className={styles.ticket}>
				<FlexWrapper flexDirection="column" className={styles['selling-area']}>
					<AirlineLogo iata={carrier} className={styles.logo}/>
					<Button onClick={() => {}}>{`Купить за ${displayCurrency(actualPrice, currency)}`}</Button>
				</FlexWrapper>
				<FlexWrapper
					flexDirection="column"
					justifyContent="start"
					alignItems="stretch"
					className={styles['info-area']}
				>
					<FlexWrapper className={styles['info-area-container']}>
						<FlightInfo
							align={FlightInfoAlign.Left}
							date={departureDate}
							time={departureTime}
							city={origin}
							cityName={originName}
						/>
						<FlightRow stops={stops}/>
						<FlightInfo
							align={FlightInfoAlign.Right}
							date={arrivalDate}
							time={arrivalTime}
							city={destination}
							cityName={destinationName}
						/>
					</FlexWrapper>
				</FlexWrapper>
			</FlexWrapper>
		</Card>
	);
};