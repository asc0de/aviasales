/**
 * Типы экшенов тикета
 */
export enum TicketAction {
	SetTickets = 'TicketAction.SetTickets',
	SetTicketsFetchStatus = 'TicketAction.SetTicketsFetchStatus',
	AddTicketsFilters = 'TicketAction.AddTicketFilters',
	SetTicketsFilters = 'TicketAction.SetTicketsFilters',
	RemoveTicketFilters = 'TicketAction.RemoveTicketFilters',
	SetTicketsCurrency = 'TicketAction.SetTicketsCurrency'
}