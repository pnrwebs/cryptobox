import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  subaccounts: [],
  mytickets: [],
  message: null,
};

const reducer = (state = initialState, action) => {
  console.log('reducer on profiles', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_PROFILE:
      return {
        ...state,
        success: null,
        status: null,
      };
    case actionTypes.GET_SUB_ACCOUNTS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_SUB_ACCOUNTS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        subaccounts: payload.data,
      });
    case actionTypes.GET_MY_TICKETS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MY_TICKETS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        mytickets: payload.data,
      });
    case actionTypes.SUBMIT_POS_REQUEST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUBMIT_POS_REQUEST_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });

    case actionTypes.SUBMIT_SUPPORT_REQUEST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUBMIT_SUPPORT_REQUEST_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
      });

    case actionTypes.SUBMIT_CHANGE_LOGIN_PASSWORD:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUBMIT_CHANGE_LOGIN_PASSWORD_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });

    case actionTypes.SUBMIT_CHANGE_WALLET_PASSWORD:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUBMIT_CHANGE_WALLET_PASSWORD_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.UPDATE_EMAIL_ADDRESS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.UPDATE_EMAIL_ADDRESS_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.VERIFY_EMAIL_OTP:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.VERIFY_EMAIL_OTP_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.SET_2FA_AUTH:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SET_2FA_AUTH_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.SEND_TXN_PASS_CHANGE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SEND_TXN_PASS_CHANGE_STATUS:
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
