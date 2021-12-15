import * as types from '../constants/action-types';
import { put,call } from 'redux-saga/effects';
import {callService} from '../../services';
import apiUrl from '../../services/serverEndpoints';


export function* homeUser(action){
    debugger
    try{
        const result = yield call(callService,{
            url:apiUrl.Home,
            method:'GET',
            // params:action.payload

        });
        debugger
        if(result.isSucess){
            debugger
            yield put({type:types.HOME_SUCCESS,payload:result.Result.data})
        }
    }
    catch(error){
        debugger
      console.log(error,'error')

    }
}