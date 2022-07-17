import * as actionTypes from './ActionTypes';

export const setInitialStateNullForgot = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_FORGOT,
});

export const processForgotPassword = (email, username) => ({
  type: actionTypes.FORGOT_PASSWORD,
  email,
  username,
});

export const processForgotPasswordStatus = payload => {
  return {
    type: actionTypes.FORGOT_PASSWORD_STATUS,
    payload,
  };
};
