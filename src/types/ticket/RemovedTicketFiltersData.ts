import {Ticket} from '../models';

/**
 * Подготовленные данные фильтров для удаления
 */
export type RemovedTicketFiltersData = {
	fields: (keyof Ticket)[];
	values: (Ticket[keyof Ticket])[];
};