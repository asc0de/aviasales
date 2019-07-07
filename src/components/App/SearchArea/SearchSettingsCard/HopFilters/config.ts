import {FilterItem} from './types';
import {Ticket} from '../../../../../types/models';
import {ClientFilter} from '../../../../../types/common';

import {pluralizeStops} from '../../../../../helpers';

/**
 * Значение фильтра на отсутствие фильтров
 */
export const ALL_HOP_FILTER_ITEMS_VALUE = -1;

/**
 * Дефолтный фильтр на включение всех фильтров
 */
export const ALL_HOP_FILTER_ITEM: ClientFilter<Ticket> = {
	field: 'stops',
	value: ALL_HOP_FILTER_ITEMS_VALUE
};

/**
 * Список фильтров контрола с фильтрами по пересадкам
 */
export const HOP_FILTERS_ITEMS: FilterItem<Ticket>[] = [
	{
		label: pluralizeStops(ALL_HOP_FILTER_ITEMS_VALUE),
		filter: ALL_HOP_FILTER_ITEM
	},
	{
		label: pluralizeStops(0),
		filter: {
			field: 'stops',
			value: 0
		}
	},
	{
		label: pluralizeStops(1),
		filter: {
			field: 'stops',
			value: 1
		}
	},
	{
		label: pluralizeStops(2),
		filter: {
			field: 'stops',
			value: 2
		}
	},
	{
		label: pluralizeStops(3),
		filter: {
			field: 'stops',
			value: 3
		}
	}
];