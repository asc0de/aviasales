import {TicketDto} from '../types/dto';
import {Ticket} from '../types/models';

/**
 * Собрать дату в стандартный формат всех браузеров
 */
const prepareDateFormat = (date: string): string => {
	const chunks = date.split('.');

	return `20${chunks[2]}-${chunks[1]}-${chunks[0]}`;
};

/**
 * Мапит транспортную сущность билета на клиентскую
 */
export const mapTicket = (ticketDto: TicketDto): Ticket => {
	return {
		origin: ticketDto.origin,
		originName: ticketDto.origin_name,
		destination: ticketDto.destination,
		destinationName: ticketDto.destination_name,
		departureDate: new Date(prepareDateFormat(ticketDto.departure_date)),
		departureTime: ticketDto.departure_time,
		arrivalDate: new Date(prepareDateFormat(ticketDto.arrival_date)),
		arrivalTime: ticketDto.arrival_time,
		carrier: ticketDto.carrier,
		stops: ticketDto.stops,
		price: ticketDto.price
	};
};