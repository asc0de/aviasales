import {CurrenciesMap} from '../models';
import {FetchStatus} from '../../enums/common';

export type CurrencyState = {
	currencies: CurrenciesMap;
	fetchStatus: FetchStatus;
};