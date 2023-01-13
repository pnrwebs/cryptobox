import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  token: '',
  error: null,
  dashboard: null,
  user: null,
  success: null,
  fasttrackqualifier: null,
  currentweekfasttrackqualifier: null,
  logout: false,
  signupdata: null,
  message: null,
  countryList: [],
  app_version: null,
  sponsor_name: null,
};

const reducer = (state = initialState, action) => {
  console.log('hello response payload on auth', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_AUTH:
      return {
        ...state,
        success: null,
        status: null,
        message: null,
      };
    case actionTypes.GET_APP_VERSION:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SET_APP_VERSION:
      return updateState(state, {
        status: payload.status,
        loading: false,
        app_version: payload.data,
      });
    case actionTypes.GET_SPONSOR_NAME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_SPONSOR_NAME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
        sponsor_name: payload.data,
      });

    case actionTypes.INIT_LOGIN:
      return {
        ...state,
        loading: true,
        success: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.success,
        dashboard: payload.data,
        error: payload.data.message,
        // token: payload.data.data.token,
      });

    case actionTypes.LOGIN_FAILURE:
      return updateState(state, {
        loading: false,
        status: 401,
        user: null,
        token: '',
      });

    case actionTypes.GET_USER_DETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_USER_DETAILS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        user: payload.data,
      });

    case actionTypes.GET_COUNTRY_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_COUNTRY_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        countryList: payload.data,
      });

    case actionTypes.GET_FAST_TRACK_QUALIFIER:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_FAST_TRACK_QUALIFIER:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        fasttrackqualifier: payload.data,
      });
    case actionTypes.GET_CURRENT_FAST_TRACK_QUALIFIER:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_CURRENT_FAST_TRACK_QUALIFIER:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        currentweekfasttrackqualifier: payload.data,
      });

    case actionTypes.INIT_LOGOUT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return updateState(state, {
        loading: false,
        status: 200,
        logout: true,
      });

    case actionTypes.INIT_SIGNUP:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return updateState(state, {
        loading: false,
        status: payload.status,
        success: payload.data.success,
        signupdata: payload.data,
        message: payload.data.message,
      });
    case actionTypes.SIGNUP_FAILURE:
      return updateState(state, {
        loading: false,
        status: payload.status,
        user: null,
        token: null,
        error: payload.data.data,
      });
    case actionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.CHANGE_PASSWORD_STATUS:
      return {
        ...state,
        loading: false,
        status: payload.status,
        success: payload.data.success,
      };

    case actionTypes.SUBMIT_UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.SUBMIT_UPDATE_PROFILE_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.LOGIN_OTP_VERIFY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.LOGIN_OTP_VERIFY_STATUS:
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
