import {CommonState} from '../../types/states';
import {Ticket} from '../../types/models';

import {SortFields} from '../../enums/ticket';
import {FetchStatus} from '../../enums/common';

/**
 * Возвращает сортированные билеты
 */
export const getSortedTickets = (
	state: CommonState,
	sortField: SortFields = SortFields.Price
): Ticket[] => {
	return state.ticket.tickets.sort((a: Ticket, b: Ticket) => {
		if (a[sortField] > b[sortField]) return 1;
		if (a[sortField] < b[sortField]) return -1;
		return 0
	});
};

/**
 * Возвращает состояние запроса за тикетами
 */
export const getTicketsFetchStatus = (state: CommonState): FetchStatus =>
	state.ticket.fetchStatus;
