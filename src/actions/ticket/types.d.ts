import {Ticket} from '../../types/models';
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

export type TicketsActions = SetTickets
	& SetTicketsFetchStatus;