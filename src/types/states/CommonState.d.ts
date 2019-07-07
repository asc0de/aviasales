import {TicketState} from './TicketState';
import {CurrencyState} from './CurrencyState';

/**
 * Общее состояние приложения
 */
export type CommonState = {
	ticket: TicketState;
	currency: CurrencyState;
};