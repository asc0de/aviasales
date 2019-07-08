import {createStore, DeepPartial, Store} from 'redux';

import {CommonState} from '../../types/states';

import {reducers} from '../../reducers';

/**
 * Создает моченный стор для тестов
 */
export const createMockStore = (initialState: DeepPartial<CommonState>): Store<CommonState> => {
	return createStore(reducers, initialState);
};