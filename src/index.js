import React from 'react';
import ReactDOM from 'react-dom';
// files
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

// store
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk"
import createHistory from 'history/createBrowserHistory'
import { reducer } from './home/store/reducer'

const history = createHistory()
const _routerMiddleware = routerMiddleware(history)
const middleware = applyMiddleware(thunk, createLogger(), _routerMiddleware)

const reducers = combineReducers({ main: reducer, router: routerReducer })
const store = createStore(reducers, middleware)


ReactDOM.render(
	<Provider store={ store }>
    	<ConnectedRouter history={ history }>
			<Root />
    	</ConnectedRouter>
	</Provider>, document.getElementById('root'));
