import * as actionTypes from './ActionTypes';

export const initLogin = (userid, password) => ({
  type: actionTypes.INIT_LOGIN,
  userid,
  password,
});

export const initAuth = payload => ({
  type: actionTypes.INIT_AUTH,
  payload,
});

export const loginSuccess = payload => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = payload => ({
  type: actionTypes.LOGIN_FAILURE,
  payload,
});

export const setInitialStateNullAuth = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_AUTH,
});

export const getCountryList = () => ({
  type: actionTypes.GET_COUNTRY_LIST,
});

export const putCountryList = payload => {
  return {
    type: actionTypes.PUT_COUNTRY_LIST,
    payload,
  };
};

export const getUserDetails = () => ({
  type: actionTypes.GET_USER_DETAILS,
});

export const putUserDetails = payload => {
  return {
    type: actionTypes.PUT_USER_DETAILS,
    payload,
  };
};

export const initAuthStatus = () => ({
  type: actionTypes.INIT_AUTH_STATUS,
});

export const authStatusSuccess = payload => {
  return {
    type: actionTypes.AUTH_STATUS_SUCCESS,
    payload,
  };
};

export const authStatusFailure = payload => ({
  type: actionTypes.AUTH_STATUS_FAILURE,
  payload,
});

export const initLogout = () => ({
  type: actionTypes.INIT_LOGOUT,
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const initSignUP = (
  sponsor,
  username,
  firstname,
  lastname,
  email,
  phone,
  loginpass,
  walletpass,
  country,
) => ({
  type: actionTypes.INIT_SIGNUP,
  sponsor,
  username,
  firstname,
  lastname,
  email,
  phone,
  loginpass,
  walletpass,
  country,
});

export const signUpSuccess = payload => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload,
  };
};

export const signUpFailure = payload => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload,
});

export const changePassword = password => ({
  type: actionTypes.CHANGE_PASSWORD,
  password,
});

export const changePasswordStatus = payload => {
  return {
    type: actionTypes.CHANGE_PASSWORD_STATUS,
    payload,
  };
};

export const getLastWeekFastTrackQualifier = () => ({
  type: actionTypes.GET_FAST_TRACK_QUALIFIER,
});

export const putLastWeekFastTrackQualifier = payload => {
  return {
    type: actionTypes.PUT_FAST_TRACK_QUALIFIER,
    payload,
  };
};

export const submitUpdateProfile = (
  firstname,
  lastname,
  mobile,
  email,
  walletPassword,
  mdtxAddress,
  usdtAddress,
  country,
) => ({
  type: actionTypes.SUBMIT_UPDATE_PROFILE,
  firstname,
  lastname,
  mobile,
  email,
  walletPassword,
  mdtxAddress,
  usdtAddress,
  country,
});

export const submitUpdateProfileStatus = payload => {
  return {
    type: actionTypes.SUBMIT_UPDATE_PROFILE_STATUS,
    payload,
  };
};
