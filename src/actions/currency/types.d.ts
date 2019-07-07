import {CurrenciesMap} from '../../types/models';

import {CurrencyAction} from '../../enums/actions/currency';
import {FetchStatus} from '../../enums/common';

export type SetCurrenciesMap = {
	type: CurrencyAction.SetCurrenciesMap;
	payload: CurrenciesMap;
};

export type SetCurrencyFetchStatus = {
	type: CurrencyAction.SetCurrencyFetchStatus;
	payload: FetchStatus;
};

export type CurrencyActions = SetCurrenciesMap
	| SetCurrencyFetchStatus;