/**
 * Сущность клиентского фильтра
 */
export type ClientFilter<F> = {
	field: keyof F
	value: F[keyof F];
};