import {Ticket} from '../../types/models';
import {ClientFilter} from '../../types/common';

import {TicketAction} from '../../enums/actions/ticket';
import {FetchStatus} from '../../enums/common';

export type SetTickets = {
	type: TicketAction.SetTickets,
	payload: Ticket[];
};

export type SetTicketsFetchStatus = {
	type: TicketAction.SetTicketsFetchStatus,
	payload: FetchStatus;
}

export type AddTicketsFilters = {
	type: TicketAction.AddTicketsFilters,
	payload: ClientFilter[]
}

export type SetTicketsFilters = {
	type: TicketAction.SetTicketsFilters,
	payload: ClientFilter[]
}

export type RemoveTicketFilters = {
	type: TicketAction.RemoveTicketFilters,
	payload: ClientFilter[]
}

export type TicketsActions = SetTickets
	& SetTicketsFetchStatus
	& AddTicketsFilters
	& SetTicketsFilters
	& RemoveTicketFilters;