import React from 'react';

import {TicketProps} from './types';

import {Card} from '../../../../Shared/Card';

/**
 * Карточка билета
 */
export const Ticket: React.FC<TicketProps> = ({ticket}) => (
	<Card>
		{ticket.originName}
		{ticket.price}
	</Card>
);