import {setTickets, setTicketsFetchStatus} from '../../../../actions/ticket';

import {Ticket} from '../../../../types/models';

import {FetchStatus} from '../../../../enums/common';

export type TicketListDispatchProps = {
	setTickets: typeof setTickets;
	setTicketsFetchStatus: typeof setTicketsFetchStatus;
};

export type TicketListStateProps = {
	tickets: Ticket[];
	ticketsFetchStatus: FetchStatus;
};

export type TicketListOwnProps = {};

export type TicketListProps = TicketListDispatchProps
	& TicketListStateProps
	& TicketListOwnProps;