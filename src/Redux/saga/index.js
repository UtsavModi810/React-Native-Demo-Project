import * as types from '../constants/action-types';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { homeUser } from './homeSaga';
import { quoteUser } from './quoteSaga';

function* rootSaga(){
    yield takeLatest(types.HOME,homeUser);
    yield takeLatest(types.QUOTE,quoteUser);
}

export default rootSaga;