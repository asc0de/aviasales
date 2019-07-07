export type Dictionary<T, F = string> = {
	[field: F]: T;
}