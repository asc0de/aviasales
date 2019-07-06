import {Reducer} from 'redux';

import {TicketState} from '../../types/states';

import {TicketAction} from '../../enums/actions/ticket';

import {TicketsActions} from '../../actions/ticket/types';
import {FetchStatus} from '../../enums/common';

const initialState: TicketState = {
	tickets: [],
	fetchStatus: FetchStatus.Initial
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
		default:
			return state;
	}
};