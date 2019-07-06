import {combineReducers} from 'redux';

import {CommonState} from '../types/states';

import {ticketReducer} from './ticket';

/**
 * Собирает все редьюсеры проекта
 */
export const reducers = combineReducers<CommonState>({
	ticket: ticketReducer
});