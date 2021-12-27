import * as types from '../constants/action-types';
import { put,call } from 'redux-saga/effects';
import {callService} from '../../services';
import apiUrl from '../../services/serverEndpoints';


export function* quoteUser(action){
    debugger
    try{
        const result = yield call(callService,{
            url:`https://api.quotable.io/random`,
            method:'GET',
            // params:action.payload

        });
        debugger
        if(result.isSucess){
            debugger
            yield put({type:types.QUOTE_SUCCESS,payload:result.Result})
        }
    }
    catch(error){
        debugger
      console.log(error,'error')

    }
}