import {Reducer} from 'redux';

import {TicketState} from '../../types/states';
import {RemovedTicketFiltersData} from '../../types/ticket';
import {ClientFilter} from '../../types/common';
import {Ticket} from '../../types/models';

import {TicketAction} from '../../enums/actions/ticket';
import {FetchStatus} from '../../enums/common';

import {TicketsActions} from '../../actions/ticket/types';

const initialState: TicketState = {
	tickets: [],
	fetchStatus: FetchStatus.Initial,
	filters: []
};

/**
 * Редьюсер тикетов
 */
export const ticketReducer: Reducer<TicketState, TicketsActions> = (
	state: TicketState = initialState,
	action: TicketsActions
) => {
	switch (action.type) {
		case TicketAction.SetTickets:
			return {...state, tickets: [...action.payload]};
		case TicketAction.SetTicketsFetchStatus:
			return {...state, fetchStatus: action.payload};
		case TicketAction.AddTicketsFilters:
			return {...state, filters: [...state.filters, ...action.payload]};
		case TicketAction.SetTicketsFilters:
			return {...state, filters: [...action.payload]};
		case TicketAction.RemoveTicketFilters:
			const {fields, values}: RemovedTicketFiltersData = action.payload.reduce(
				(acc: RemovedTicketFiltersData, {field, value}: ClientFilter<Ticket>) => {
					acc.fields.push(field);
					acc.values.push(value);

					return acc;
				},
				{
					fields: [],
					values: []
				}
			);
			return {
				...state,
				filters: [
					...state.filters.filter(
						({field, value}) => !fields.includes(field) || !values.includes(value)
					)
				]
			};
		default:
			return state;
	}
};