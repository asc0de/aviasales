import {AddTicketsFilters, RemoveTicketFilters, SetTickets, SetTicketsFetchStatus, SetTicketsFilters} from './types';
import {Ticket} from '../../types/models';
import {ClientFilter} from '../../types/common';

import {TicketAction} from '../../enums/actions/ticket';
import {FetchStatus} from '../../enums/common';

/**
 * Устанавливает тикеты в стейт
 */
export const setTickets = (tickets: Ticket[]): SetTickets => ({
	type: TicketAction.SetTickets,
	payload: tickets
});

/**
 * Устанавливает состояние запроса за тикетами
 */
export const setTicketsFetchStatus = (fetchStatus: FetchStatus): SetTicketsFetchStatus => ({
	type: TicketAction.SetTicketsFetchStatus,
	payload: fetchStatus
});

/**
 * Устанавливает фильтры по тикетам
 */
export const setTicketsFilters = (filters: ClientFilter<Ticket>[]): SetTicketsFilters => ({
	type: TicketAction.SetTicketsFilters,
	payload: filters
});

/**
 * Добавляет фильтры по тикетам
 */
export const addTicketsFilters = (filters: ClientFilter<Ticket>[]): AddTicketsFilters => ({
	type: TicketAction.AddTicketsFilters,
	payload: filters
});

/**
 * Удаляет фильтр
 */
export const removeTicketFilters = (filters: ClientFilter<Ticket>[]): RemoveTicketFilters => ({
	type: TicketAction.RemoveTicketFilters,
	payload: filters
});
