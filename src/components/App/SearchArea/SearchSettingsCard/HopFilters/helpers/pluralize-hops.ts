/**
 * Склоняет слово "пересадки"
 */
export const pluralizeHops = (hops: number) => {
	if (hops === -1) return 'Все';
	if (hops === 0) return 'Без пересадок';
	if (hops === 1) return `${hops} пересадка`;
	if (hops >= 2 && hops <= 4) return `${hops} пересадки`;
	if (hops >= 5) return `${hops} пересадок`;

	return ''
};