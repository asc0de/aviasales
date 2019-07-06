import {request} from './request';

import {TicketDto} from '../types/dto';


import {mapTicket} from '../mappers';

/**
 * Сервис билетов
 */
export class TicketService {
	/**
	 * Возвращает список билетов
	 */
	public static async get() {
		const {tickets} = await request<{tickets: TicketDto[]}>('/tickets.json');

		return tickets.map(mapTicket);
	}
}