import {setTicketsCurrency} from '../../../../../actions/ticket';
import {setCurrenciesMap, setCurrencyFetchStatus} from '../../../../../actions/currency';

import {Currency, FetchStatus} from '../../../../../enums/common';

export type CurrencyRadioDispatchProps = {
	setTicketsCurrency: typeof setTicketsCurrency;
	setCurrenciesMap: typeof setCurrenciesMap;
	setCurrencyFetchStatus: typeof setCurrencyFetchStatus;
};

export type CurrencyRadioStateProps = {
	ticketsCurrency: Currency;
	currenciesFetchStatus: FetchStatus;
};

export type CurrencyRadioOwnProps = {};

export type CurrencyRadioProps = CurrencyRadioDispatchProps
	& CurrencyRadioStateProps
	& CurrencyRadioOwnProps;