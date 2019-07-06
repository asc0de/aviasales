/**
 * Сущность тикета с сервера
 */
export type TicketDto = {
	origin: string;
	origin_name: string;
	destination: string;
	destination_name: string;
	departure_date: string;
	departure_time: string;
	arrival_date: string;
	carrier: string;
	stops: number;
	price: number;
};