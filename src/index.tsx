import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import {reducers} from './reducers';

import {App} from './components/App';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
	// Избегает добавление логгера в продакшн
	const { logger } = require('redux-logger');

	middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
