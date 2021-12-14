import * as types from '../constants/action-types';
import { put,call } from 'redux-saga/effects';
import {callService} from '../../services';
import apiUrl from '../../services/serverEndpoints';


export function* homeUser(action){
    try{
        const result = yield call(callService,{
            url:apiUrl.Home,
            method:'GET',
            // params:action.payload

        });
        debugger
        console.log('result',result.Result.data)
        if(result.isSucess){
            debugger
            yield put({type:types.HOME_SUCCESS,payload:result.Result.data})
        }
    }
    catch(error){
      console.log(error,'error')

    }
}