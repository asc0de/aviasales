/**
 * Сущность тикета на клиенте
 */
export type Ticket = {
	origin: string;
	originName: string;
	destination: string;
	destinationName: string;
	departureDate: string;
	departureTime: string;
	arrivalDate: string;
	carrier: string;
	stops: number;
	price: number;
};