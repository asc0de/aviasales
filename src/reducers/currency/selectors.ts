import {CommonState} from '../../types/states';
import {CurrenciesMap} from '../../types/models';
import {Currency, FetchStatus} from '../../enums/common';

/**
 * Возвращает словарь валют
 */
export const getCurrenciesMap = (state: CommonState): CurrenciesMap =>
	state.currency.currencies;

/**
 * Возвращает состояние запроса за словарем валют
 */
export const getCurrencyFetchStatus = (state: CommonState): FetchStatus =>
	state.currency.fetchStatus;
/**
 * Возвращает коэффициент конвертации базовой валюты в искомую
 */
export const getCurrencyRate = (state: CommonState, currency: Currency): number => {
	const currenciesMap = getCurrenciesMap(state);

	return currenciesMap[currency];
};