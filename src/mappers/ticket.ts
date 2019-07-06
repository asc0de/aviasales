import {TicketDto} from '../types/dto';
import {Ticket} from '../types/models';

/**
 * Мапит транспортную сущность билета на клиентскую
 */
export const mapTicket = (ticketDto: TicketDto): Ticket => {
	return {
		origin: ticketDto.origin,
		originName: ticketDto.origin_name,
		destination: ticketDto.destination,
		destinationName: ticketDto.destination_name,
		departureDate: ticketDto.departure_date,
		departureTime: ticketDto.departure_time,
		arrivalDate: ticketDto.arrival_date,
		carrier: ticketDto.carrier,
		stops: ticketDto.stops,
		price: ticketDto.price
	};
};