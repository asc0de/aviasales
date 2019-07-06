/**
 * Список состояний асинхронных запросов
 */
export enum FetchStatus {
	Initial = 'initial',
	Loading = 'loading',
	Complete = 'complete',
	Updating = 'updating',
	Error = 'error'
}