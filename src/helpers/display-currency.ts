import {Currency} from '../enums/common';

/**
 * Отображает знак валюты в русской локали
 */
export const displayCurrency = (value: number, currency: Currency) =>
	value.toLocaleString("ru-RU", {
		currency,
		style: "currency",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	})