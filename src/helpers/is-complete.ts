import {FetchStatus} from '../enums/common';

/**
 * Проверяет статус запроса за данными на статус завершения
 */
export const isComplete = (fetchStatus: FetchStatus): boolean =>
	fetchStatus === FetchStatus.Complete;