import ACTIONS from './action';

const initialState = {
  num: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NUMBER:
      let { payload } = action;
      return {
        ...state,
        num: payload
      };
    default:
      return state;
  }
};

export { reducer, initialState };
