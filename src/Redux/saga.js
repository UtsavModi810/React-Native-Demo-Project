import {delay,takeLatest,takeEvery,put,call} from 'redux-saga/effects';
import axios from 'axios';

//Worker Function
function* fetchUserRequest(action){
    try{
        const apiConfig={
            method:'get',
            url:'https://reqres.in/api/users/',
        };
        
        const response = yield call(axios,apiConfig);
        console.log('Response data :',response.data)
        yield put({type:'FETCH_USER_SUCCESS',payload:response.data});

    }
    catch(e){
        console.log(e);
        yield put({type:'FETCH_USER_FAILURE',payload:e.message})  
    }
}

//Watcher Function

function* rootsaga(){
    yield takeLatest('FETCH_USER_REQUEST',fetchUserRequest);

}
export default rootsaga;