import {FetchStatus} from '../enums/common';

/**
 * Проверяет статус запроса за данными на статус загрузки
 */
export const isLoading = (fetchStatus: FetchStatus): boolean =>
	fetchStatus === FetchStatus.Loading;