import {createMockStore} from '../../../helpers/tests';

import {Currency, FetchStatus, SortDirection} from '../../../enums/common';

import {getSortedAndFilteredTickets} from '../selectors';

const mockedTickets = [
	{
		origin: 'VVO',
		originName: 'Владивосток',
		destination: 'TLV',
		destinationName: 'Тель-Авив',
		departureDate: '12.05.18',
		departureTime: '16:20',
		arrivalDate: '12.05.18',
		arrivalTime: '22:10',
		carrier: 'TK',
		stops: 0,
		price: 12400
	}, {
		origin: 'VVO',
		originName: 'Владивосток',
		destination: 'TLV',
		destinationName: 'Тель-Авив',
		departureDate: '12.05.18',
		departureTime: '17:20',
		arrivalDate: '12.05.18',
		arrivalTime: '23:50',
		carrier: 'S7',
		stops: 1,
		price: 13100
	},
	{
		origin: 'VVO',
		originName: 'Владивосток',
		destination: 'TLV',
		destinationName: 'Тель-Авив',
		departureDate: '12.05.18',
		departureTime: '12:10',
		arrivalDate: '12.05.18',
		arrivalTime: '18:10',
		carrier: 'SU',
		stops: 0,
		price: 15300
	}
];

describe('TicketSelectors', () => {
	it('should contain one ticket', () => {
		const store = createMockStore({
			ticket: {
				fetchStatus: FetchStatus.Complete,
				currency: Currency.RUB,
				tickets: mockedTickets,
				filters: [
					{
						field: 'stops',
						value: 1
					}
				]
			}
		});

		const tickets = getSortedAndFilteredTickets(store.getState(), 'price');

		expect(tickets.length).toEqual(1);
		expect(tickets[0]).toEqual(mockedTickets[1]);
	});

	it('should contain two tickets with descending order by price', () => {
		const store = createMockStore({
			ticket: {
				fetchStatus: FetchStatus.Complete,
				currency: Currency.RUB,
				tickets: mockedTickets,
				filters: [
					{
						field: 'stops',
						value: 0
					}
				]
			}
		});

		const tickets = getSortedAndFilteredTickets(store.getState(), 'price', SortDirection.Desc);

		expect(tickets.length).toEqual(2);
		expect(tickets[0]).toEqual(mockedTickets[2]);
		expect(tickets[1]).toEqual(mockedTickets[0]);
	});

	it('shouldn\'t contain any tickets', () => {
		const store = createMockStore({
			ticket: {
				fetchStatus: FetchStatus.Complete,
				currency: Currency.RUB,
				tickets: [],
				filters: [
					{
						field: 'stops',
						value: 1
					}
				]
			}
		});

		const tickets = getSortedAndFilteredTickets(store.getState(), 'price');

		expect(tickets).toEqual([]);
	});
});