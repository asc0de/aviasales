import {Ticket} from '../models';
import {ClientFilter} from '../common';

import {FetchStatus} from '../../enums/common';

/**
 * Состояние тикетов в общем состоянии приложения
 */
export type TicketState = {
	tickets: Ticket[];
	fetchStatus: FetchStatus;
	filters: ClientFilter<Ticket>[];
};