import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  myinvestments: [],
  compoundinvestment: [],
  investmentPackages: [],
};

const reducer = (state = initialState, action) => {
  console.log('reducer on income report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_INVESTMENT:
      return {
        ...state,
        success: null,
        status: null,
      };
    case actionTypes.GET_MY_INVESTMENTS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MY_INVESTMENTS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        myinvestments: payload.data,
      });
    case actionTypes.GET_MY_COMPOUND_INVESTMENTS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MY_COMPOUND_INVESTMENTS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        compoundinvestment: payload.data,
      });
    case actionTypes.GET_INVESTMENT_PACKAGE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_INVESTMENT_PACKAGE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        investmentPackages: payload.data,
      });
    case actionTypes.MAKE_INVESTMENT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.MAKE_INVESTMENT_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    default:
      return state;
  }
};

export default reducer;
