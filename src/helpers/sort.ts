import {SortDirection} from '../enums/common';

/**
 * Сортирует сущности по полю
 */
export const sort = <T>(
	items: T[],
	sortField: keyof T,
	direction: SortDirection = SortDirection.Asc
) => {
	return items.sort((a: T, b: T) => {
		if (direction === SortDirection.Asc) {
			if (a[sortField] > b[sortField]) return 1;
			if (a[sortField] < b[sortField]) return -1;
			return 0;
		}
		if (direction === SortDirection.Desc) {
			if (a[sortField] < b[sortField]) return 1;
			if (a[sortField] > b[sortField]) return -1;
			return 0;
		}
		return 0;
	});
};