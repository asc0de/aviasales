import {Reducer} from 'redux';

import {CurrencyState} from '../../types/states';
import {CurrencyActions} from '../../actions/currency/types';

import {Currency, FetchStatus} from '../../enums/common';
import {CurrencyAction} from '../../enums/actions/currency';

const initialValues: CurrencyState = {
	currencies: {
		[Currency.RUB]: 1,
		[Currency.USD]: 1,
		[Currency.EUR]: 1
	},
	fetchStatus: FetchStatus.Initial
};

/**
 * Редьюсер валют
 */
export const currencyReducer: Reducer<CurrencyState, CurrencyActions> = (
	state: CurrencyState = initialValues,
	action: CurrencyActions) => {
		switch (action.type) {
			case CurrencyAction.SetCurrenciesMap:
				return {...state, currencies: action.payload};
			case CurrencyAction.SetCurrencyFetchStatus:
				return {...state, fetchStatus: action.payload};
			default:
				return state;
		}
};