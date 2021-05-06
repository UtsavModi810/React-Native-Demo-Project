export const fetchUserRequest = () =>{
    return{
        type:'FETCH_USER_REQUEST'
    };
};

const fetchUserSuccess = user =>{
    return{
        type:'FETCH_USER_SUCCESS',
        payload:user,
    };
};

const fetchUserFailure = error =>{
    return{
        type:'FETCH_USER_FAILURE',
        payload:error,
    };
};