import {setTickets, setTicketsFetchStatus} from '../../../../actions/ticket';

import {Ticket} from '../../../../types/models';

import {Currency, FetchStatus} from '../../../../enums/common';

export type TicketListDispatchProps = {
	setTickets: typeof setTickets;
	setTicketsFetchStatus: typeof setTicketsFetchStatus;
};

export type TicketListStateProps = {
	tickets: Ticket[];
	ticketsFetchStatus: FetchStatus;
	ticketsCurrency: Currency;
	rate: number;
};

export type TicketListOwnProps = {};

export type TicketListProps = TicketListDispatchProps
	& TicketListStateProps
	& TicketListOwnProps;