import {Ticket} from '../../types/models';
import {ClientFilter} from '../../types/common';

import {TicketAction} from '../../enums/actions/ticket';
import {Currency, FetchStatus} from '../../enums/common';

export type SetTickets = {
	type: TicketAction.SetTickets;
	payload: Ticket[];
};

export type SetTicketsFetchStatus = {
	type: TicketAction.SetTicketsFetchStatus;
	payload: FetchStatus;
};

export type AddTicketsFilters = {
	type: TicketAction.AddTicketsFilters;
	payload: ClientFilter[];
};

export type SetTicketsFilters = {
	type: TicketAction.SetTicketsFilters;
	payload: ClientFilter[];
};

export type RemoveTicketFilters = {
	type: TicketAction.RemoveTicketFilters;
	payload: ClientFilter[];
};

export type SetTicketsCurrency = {
	type: TicketAction.SetTicketsCurrency;
	payload: Currency;
}

export type TicketsActions = SetTickets
	| SetTicketsFetchStatus
	| AddTicketsFilters
	| SetTicketsFilters
	| RemoveTicketFilters
	| SetTicketsCurrency;