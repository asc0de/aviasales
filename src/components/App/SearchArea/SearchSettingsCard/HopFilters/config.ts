import {FilterItem} from './types';
import {Ticket} from '../../../../../types/models';
import {ClientFilter} from '../../../../../types/common';

import {pluralizeHops} from './helpers';

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
		label: pluralizeHops(ALL_HOP_FILTER_ITEMS_VALUE),
		filter: ALL_HOP_FILTER_ITEM
	},
	{
		label: pluralizeHops(0),
		filter: {
			field: 'stops',
			value: 0
		}
	},
	{
		label: pluralizeHops(1),
		filter: {
			field: 'stops',
			value: 1
		}
	},
	{
		label: pluralizeHops(2),
		filter: {
			field: 'stops',
			value: 2
		}
	},
	{
		label: pluralizeHops(3),
		filter: {
			field: 'stops',
			value: 3
		}
	}
];