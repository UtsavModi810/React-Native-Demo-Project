import * as types from '../constants/action-types';
import { takeEvery } from 'redux-saga/effects';
import { homeUser } from './homeSaga';

function* rootSaga(){
    yield takeEvery(types.HOME,homeUser);
}

export default rootSaga;