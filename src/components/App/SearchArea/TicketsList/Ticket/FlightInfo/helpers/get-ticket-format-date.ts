/**
 * Форматирует дату в формат билета
 */
export const getTicketFormatDate = (date: Date) =>
	date.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		weekday: "short"
	})
	.split(',')
	.map((part: string) => part.trim())
	.reverse()
	.join(', ');