import * as types from '../../constants/action-types';

export const homeAction = () =>{
    return{
        type:types.HOME
    }
}

export const incrementAction = () =>{
    debugger
    return{
        type:types.INCREMENT
    }
}

export const decrementAction = () =>{
    return{
        type:types.DECREMENT
    }
}

export const clearAction = ()=>{
    return{
        type:types.CLEAR
    }
}

export const todoAction = (param) =>{
    return{
        type:types.TODO,
        payload:{param},

    }
}

export const todoClearAction = (id) =>{
    return{
        type:types.TODO_CLEAR,
        payload:id,
    }
}
