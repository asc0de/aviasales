import {SetCurrenciesMap, SetCurrencyFetchStatus} from './types';
import {CurrenciesMap} from '../../types/models';

import {CurrencyAction} from '../../enums/actions/currency';
import {FetchStatus} from '../../enums/common';

/**
 * Устанавливает словарь валют в хранилище приложения
 */
export const setCurrenciesMap = (currencies: CurrenciesMap): SetCurrenciesMap => ({
	type: CurrencyAction.SetCurrenciesMap,
	payload: currencies
});

/**
 * Устанавливает состояние запроса за словарем валют
 */
export const setCurrencyFetchStatus = (fetchStatus: FetchStatus): SetCurrencyFetchStatus => ({
	type: CurrencyAction.SetCurrencyFetchStatus,
	payload: fetchStatus
});