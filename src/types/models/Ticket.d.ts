/**
 * Сущность тикета на клиенте
 */
export type Ticket = {
	origin: string;
	originName: string;
	destination: string;
	destinationName: string;
	departureDate: Date;
	departureTime: string;
	arrivalDate: Date;
	arrivalTime: string;
	carrier: string;
	stops: number;
	price: number;
};