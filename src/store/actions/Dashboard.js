import * as actionTypes from './ActionTypes';

export const getUserDetail = () => ({
  type: actionTypes.GET_USER_DETAIL,
});

export const putUserDetail = payload => {
  return {
    type: actionTypes.PUT_USER_DETAIL,
    payload,
  };
};

export const getApprovers = () => ({
  type: actionTypes.GET_APPROVERS,
});

export const putApprovers = payload => {
  return {
    type: actionTypes.PUT_APPROVERS,
    payload,
  };
};

export const updateMyProfile = data => ({
  type: actionTypes.UPDATE_MY_PROFILE,
  data,
});

export const updateMyProfileStatus = payload => {
  return {
    type: actionTypes.UPDATE_MY_PROFILE_STATUS,
    payload,
  };
};

export const getBankAccount = () => ({
  type: actionTypes.GET_BANK_ACCOUNT,
});

export const setBankAccount = payload => {
  return {
    type: actionTypes.SET_BANK_ACCOUNT,
    payload,
  };
};

export const updateBankAccount = data => ({
  type: actionTypes.UPDATE_BANK_ACCOUNT,
  data,
});

export const updateBankAccountStatus = payload => {
  return {
    type: actionTypes.UPDATE_BANK_ACCOUNT_STATUS,
    payload,
  };
};
