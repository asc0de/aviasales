import {ClientFilter} from '../../../../../types/common';
import {Ticket} from '../../../../../types/models';

import {addTicketsFilters, removeTicketFilters, setTicketsFilters} from '../../../../../actions/ticket';

export type HopFiltersDispatchProps = {
	setTicketsFilters: typeof setTicketsFilters;
	addTicketsFilters: typeof addTicketsFilters;
	removeTicketFilter: typeof removeTicketFilters;
};

export type HopFiltersStateProps = {
	filters: ClientFilter<Ticket>[];
};

export type HopFiltersOwnProps = {};

export type HopFiltersProps = HopFiltersDispatchProps
	& HopFiltersStateProps
	& HopFiltersOwnProps;

export type FilterItem<T> = {
	label: string;
	filter: ClientFilter<T>;
};