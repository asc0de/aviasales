import {FetchStatus} from '../enums/common';

/**
 * Проверяет статус запроса за данными на статус инициализации
 */
export const isInitial = (fetchStatus: FetchStatus): boolean =>
	fetchStatus === FetchStatus.Initial;