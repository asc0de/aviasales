import {Ticket} from '../../../../../types/models';

import {Currency} from '../../../../../enums/common';

export type TicketProps = {
	ticket: Ticket;
	rate: number;
	currency: Currency;
};
