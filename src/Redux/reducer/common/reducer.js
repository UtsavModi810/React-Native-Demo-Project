import * as types from '../../constants/action-types';

const initial = {
  home: [],
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
    default:
      return state;
  }
};

export default commonReducer;
