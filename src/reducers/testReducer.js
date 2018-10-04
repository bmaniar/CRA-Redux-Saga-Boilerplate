import * as actions from '../actions'
const initialState = {
  fetching : false
};
export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.triggerAction:
          return { ...state, fetching: true};
        default:
          return state;
    }
  }