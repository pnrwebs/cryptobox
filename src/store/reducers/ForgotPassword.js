import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  forgot_pass: null,
};

const reducer = (state = initialState, action) => {
  console.log('reducer on forgot password', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_FORGOT:
      return {
        ...state,
        success: null,
        status: null,
      };

    case actionTypes.FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.FORGOT_PASSWORD_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        forgot_pass: payload.data.message,
      });

    default:
      return state;
  }
};

export default reducer;
