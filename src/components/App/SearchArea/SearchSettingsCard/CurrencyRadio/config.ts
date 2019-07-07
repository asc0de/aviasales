import {RadioItem} from '../../../../Shared/Radio/types';
import {Currency} from '../../../../../enums/common';

/**
 * Список элементов радиобаттона валют
 */
export const CURRENCY_ITEMS: RadioItem[] = [
	{
		label: Currency.RUB,
		value: Currency.RUB
	},
	{
		label: Currency.USD,
		value: Currency.USD
	},
	{
		label: Currency.EUR,
		value: Currency.EUR
	}
];