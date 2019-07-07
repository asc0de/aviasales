import {CurrenciesMapDto} from '../types/dto';
import {CurrenciesMap} from '../types/models';

import {Currency} from '../enums/common';

/**
 * Маппит серверный словарь валют на клиентский
 */
export const mapCurrencies = (currenciesMap: CurrenciesMapDto): CurrenciesMap => {
	return {
		[Currency.USD]: currenciesMap[Currency.USD] || 1,
		[Currency.EUR]: currenciesMap[Currency.EUR] || 1,
		[Currency.RUB]: currenciesMap[Currency.RUB] || 1,
	};
}