/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../reducer';
import { handler } from '../saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(handler);
// export default sagaMiddleware;
export { store };

// configureStore
