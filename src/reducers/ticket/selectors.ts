import {CommonState} from '../../types/states';
import {Ticket} from '../../types/models';
import {ClientFilter} from '../../types/common';

import {FetchStatus, SortDirection} from '../../enums/common';
import {ALL_HOP_FILTER_ITEMS_VALUE} from '../../components/App/SearchArea/SearchSettingsCard/HopFilters/config';

import {sort} from '../../helpers';

/**
 * Возвращает сортированные и фильтрованные билеты
 */
export const getSortedAndFilteredTickets = (
	state: CommonState,
	sortField: keyof Ticket,
	direction: SortDirection = SortDirection.Asc
): Ticket[] => {
	const {tickets, filters} = state.ticket;
	const filteredTickets = filters.length
		? tickets.reduce(
			(acc: Ticket[], ticket: Ticket) => {
				const passedFilters = filters.filter(
					({field, value}) => ticket[field] === value || value === ALL_HOP_FILTER_ITEMS_VALUE
				);

				if (passedFilters.length === 0) {
					return acc;
				}

				acc.push(ticket);

				return acc;
			},
			[]
		)
		: tickets;

	return sort<Ticket>(filteredTickets, sortField, direction);
};

/**
 * Возвращает состояние запроса за тикетами
 */
export const getTicketsFetchStatus = (state: CommonState): FetchStatus =>
	state.ticket.fetchStatus;

/**
 * Возвращает состояние фильтров тикетов
 */
export const getTicketFilters = (state: CommonState): ClientFilter<Ticket>[] =>
	state.ticket.filters;
