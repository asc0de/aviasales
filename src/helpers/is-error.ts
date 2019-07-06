import {FetchStatus} from '../enums/common';

/**
 * Проверяет статус запроса за данными на статус ошибки
 */
export const isError = (fetchStatus: FetchStatus): boolean =>
	fetchStatus === FetchStatus.Error;