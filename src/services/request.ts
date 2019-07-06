import {HttpRequestMethod} from '../enums/common';

/**
 * Выполняет запрос на сервер
 */
export const request = <R ={}>(
	url: string,
	method: HttpRequestMethod = HttpRequestMethod.Get,
	body: Document | BodyInit | null = null
): Promise<R> => {
	return new Promise<R>((resolve, reject) => {
		const xmlRequest = new XMLHttpRequest();

		xmlRequest.open(method, url);

		xmlRequest.send(body);

		xmlRequest.onload = () => resolve(xmlRequest.response ? JSON.parse(xmlRequest.response) : null);

		xmlRequest.onerror = () => reject(xmlRequest.response ? JSON.parse(xmlRequest.response) : null);
	});
};