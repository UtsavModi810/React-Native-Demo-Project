import * as types from '../../constants/action-types';

const initial = {
  home: [],
  stateValue: 0,
  todo: [],
};

const commonReducer = (state = initial, action) => {
  debugger;
  switch (action.type) {
    case types.HOME:
      return {
        ...state,
      };

    case types.HOME_SUCCESS:
      return {
        ...state,
        home: action.payload,
      };
    case types.INCREMENT:
      return {
        ...state,
        stateValue: state.stateValue + 1,
      };
    case types.DECREMENT:
      if (state.stateValue > 0) {
        return {
          ...state,
          stateValue: state.stateValue - 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case types.CLEAR:
      return {
        ...state,
        stateValue: 0,
      };
    case types.TODO: {
      let qq = action.payload.param;
      debugger;
      let arr = state.todo
      debugger
      arr.push(qq)
      debugger;
      return {
        ...state,
        todo:arr
       
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
