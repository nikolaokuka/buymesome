import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const middlewares = [logger];

const composedEnhancers = compose(composeWithDevTools(applyMiddleware(...middlewares)));

export const store = createStore(rootReducer, undefined, composedEnhancers);
