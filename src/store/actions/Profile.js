import * as actionTypes from './ActionTypes';

export const setInitialStateNullProfile = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_PROFILE,
});

export const getSubAccounts = () => {
  return {
    type: actionTypes.GET_SUB_ACCOUNTS,
  };
};

export const putSubAccounts = payload => ({
  type: actionTypes.PUT_SUB_ACCOUNTS,
  payload,
});

export const getMyTickets = () => {
  return {
    type: actionTypes.GET_MY_TICKETS,
  };
};

export const putMyTickets = payload => ({
  type: actionTypes.PUT_MY_TICKETS,
  payload,
});

export const submitPosRequest = (
  firstname,
  lastname,
  mobile,
  email,
  address,
  walletPassword,
) => ({
  type: actionTypes.SUBMIT_POS_REQUEST,
  firstname,
  lastname,
  mobile,
  email,
  address,
  walletPassword,
});

export const submitPosRequestStatus = payload => {
  return {
    type: actionTypes.SUBMIT_POS_REQUEST_STATUS,
    payload,
  };
};

export const submitSupportRequest = (value, subject, query) => ({
  type: actionTypes.SUBMIT_SUPPORT_REQUEST,
  value,
  subject,
  query,
});

export const submitSupportRequestStatus = payload => {
  return {
    type: actionTypes.SUBMIT_SUPPORT_REQUEST_STATUS,
    payload,
  };
};

export const submitChangeLoginPassword = (
  oldLoginPass,
  newLoginPass,
  newLoginConfPass,
) => ({
  type: actionTypes.SUBMIT_CHANGE_LOGIN_PASSWORD,
  oldLoginPass,
  newLoginPass,
  newLoginConfPass,
});

export const submitChangeLoginPasswordStatus = payload => {
  return {
    type: actionTypes.SUBMIT_CHANGE_LOGIN_PASSWORD_STATUS,
    payload,
  };
};

export const submitChangeWalletPassword = (
  oldWalletPass,
  newWalletPass,
  newWalletConfPass,
) => ({
  type: actionTypes.SUBMIT_CHANGE_WALLET_PASSWORD,
  oldWalletPass,
  newWalletPass,
  newWalletConfPass,
});

export const submitChangeWalletPasswordStatus = payload => {
  return {
    type: actionTypes.SUBMIT_CHANGE_WALLET_PASSWORD_STATUS,
    payload,
  };
};

export const updateEmailAddress = (oldEmailId, newEmailId, walletPassword) => ({
  type: actionTypes.UPDATE_EMAIL_ADDRESS,
  oldEmailId,
  newEmailId,
  walletPassword,
});

export const updateEmailAddressStatus = payload => {
  return {
    type: actionTypes.UPDATE_EMAIL_ADDRESS_STATUS,
    payload,
  };
};

export const verifyEmailOtp = (oldEmailOtp, newEmailOtp) => ({
  type: actionTypes.VERIFY_EMAIL_OTP,
  oldEmailOtp,
  newEmailOtp,
});

export const verifyEmailOtpStatus = payload => {
  return {
    type: actionTypes.VERIFY_EMAIL_OTP_STATUS,
    payload,
  };
};

export const set2FAAuth = checked => ({
  type: actionTypes.SET_2FA_AUTH,
  checked,
});

export const set2FAAuthStatus = payload => {
  return {
    type: actionTypes.SET_2FA_AUTH_STATUS,
    payload,
  };
};

export const sendTxnChangeEmail = (username, email) => ({
  type: actionTypes.SEND_TXN_PASS_CHANGE,
  username,
  email,
});

export const sendTxnChangeEmailStatus = payload => {
  return {
    type: actionTypes.SEND_TXN_PASS_CHANGE_STATUS,
    payload,
  };
};
