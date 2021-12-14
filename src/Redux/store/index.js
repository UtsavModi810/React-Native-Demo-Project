import createSagaMiddleware from 'redux-saga';
import { createStore,applyMiddleware } from 'redux';
import rootSaga from '../saga';
import rootReducer from '../reducer';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'reduxStore',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export let persistor = persistStore(store, null, () => {
    console.log('rehydrated');
});



export default store;
