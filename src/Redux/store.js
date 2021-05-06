import createSagaMiddleware from 'redux-saga';
import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer';
import rootsaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootsaga);

export default store;
