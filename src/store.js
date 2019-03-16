import { applyMiddleware, createStore } from 'redux';

import { logger } from "redux-logger";
import { default as ReduxThunk } from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './Reducers';

const middleware = applyMiddleware(promise, ReduxThunk, logger);

export default createStore(reducer, middleware);