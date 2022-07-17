import * as actionTypes from './ActionTypes';

export const setInitialStateNullInvestment = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_INVESTMENT,
});

export const getMyInvestments = () => {
  return {
    type: actionTypes.GET_MY_INVESTMENTS,
  };
};

export const putMyInvestments = payload => ({
  type: actionTypes.PUT_MY_INVESTMENTS,
  payload,
});

export const getMyCompoundInvestments = () => {
  return {
    type: actionTypes.GET_MY_COMPOUND_INVESTMENTS,
  };
};

export const putMyCompoundInvestment = payload => ({
  type: actionTypes.PUT_MY_COMPOUND_INVESTMENTS,
  payload,
});

export const getInvestmentPackage = () => {
  return {
    type: actionTypes.GET_INVESTMENT_PACKAGE,
  };
};

export const putInvestmentPackage = payload => ({
  type: actionTypes.PUT_INVESTMENT_PACKAGE,
  payload,
});

export const makeInvestment = (packageId, walletPassword) => ({
  type: actionTypes.MAKE_INVESTMENT,
  packageId,
  walletPassword,
});

export const makeInvestmentStatus = payload => {
  return {
    type: actionTypes.MAKE_INVESTMENT_STATUS,
    payload,
  };
};
