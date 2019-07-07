import React from 'react';

import {TicketProps} from './types';

import {Card} from '../../../../Shared/Card';

/**
 * Карточка билета
 */
export const Ticket: React.FC<TicketProps> = ({ticket, rate}) => (
	<Card>
		<div>{ticket.originName}</div>
		<div>{ticket.price * rate}</div>
		<div>{ticket.stops}</div>
	</Card>
);