import {request} from './request';

import {CurrenciesMap} from '../types/models';

import {CommonConfig} from '../config';
import {Currency} from '../enums/common';

import {mapCurrencies} from '../mappers';

/**
 * Сервис валют
 */
export class CurrencyService {
	/**
	 * Возвращает мапу валют
	 */
	public static async get(baseCurrency: Currency = CommonConfig.BASE_CURRENCY): Promise<CurrenciesMap> {
		const {rates} = await request<{rates: CurrenciesMap}>(`https://data.fixer.io/api/latest
			?access_key=${CommonConfig.CURRENCIES_API_KEY}
			&base=${baseCurrency}
			&symbols=${Currency.EUR},${Currency.USD}`);

		return mapCurrencies(rates);
	}
}