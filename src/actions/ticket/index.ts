import {SetTickets, SetTicketsFetchStatus} from './types';
import {Ticket} from '../../types/models';
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
