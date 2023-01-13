import * as actionTypes from './ActionTypes';

export const setInitialStateNullWallet = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_WALLET,
});

export const addFundToWalletViaMDTX = (topUpAmount, selectNetwork) => ({
  type: actionTypes.ADD_FUND_TO_WALLET_VIA_MDTX,
  topUpAmount,
  selectNetwork,
});

export const addFundToWalletViaMDTXStatus = payload => {
  return {
    type: actionTypes.ADD_FUND_TO_WALLET_VIA_MDTX_STATUS,
    payload,
  };
};

export const addFundToWalletViaUSDT = topUpAmount => ({
  type: actionTypes.ADD_FUND_TO_WALLET_VIA_USDT,
  topUpAmount,
});

export const addFundToWalletViaUSDTStatus = payload => {
  return {
    type: actionTypes.ADD_FUND_TO_WALLET_VIA_USDT_STATUS,
    payload,
  };
};

export const transferFundsToOther = (amount, receiverId, walletPassword) => ({
  type: actionTypes.TRANSFER_FUND_TO_OTHER,
  amount,
  receiverId,
  walletPassword,
});

export const transferFundsToOtherStatus = payload => {
  return {
    type: actionTypes.TRANSFER_FUND_TO_OTHER_STATUS,
    payload,
  };
};

export const getAddFundHistory = () => {
  return {
    type: actionTypes.GET_ADD_FUND_HISTORY,
  };
};

export const putAddFundHistory = payload => ({
  type: actionTypes.PUT_ADD_FUND_HISTORY,
  payload,
});

export const getWithdrawalFund = () => {
  return {
    type: actionTypes.GET_WITHDRAWAL_FUND,
  };
};

export const putWithdrawalFund = payload => ({
  type: actionTypes.PUT_WITHDRAWAL_FUND,
  payload,
});

export const getWithdrawalHistory = () => {
  return {
    type: actionTypes.GET_WITHDRAWAL_HISTORY,
  };
};

export const putWithdrawalHistory = payload => ({
  type: actionTypes.PUT_WITHDRAWAL_HISTORY,
  payload,
});

export const getInvestmentFundHistory = () => {
  return {
    type: actionTypes.GET_INVESTMENT_FUND_HISTORY,
  };
};

export const putInvestmentFundHistory = payload => ({
  type: actionTypes.PUT_INVESTMENT_FUND_HISTORY,
  payload,
});

export const getCashWalletHistory = () => {
  return {
    type: actionTypes.GET_CASH_WALLET_HISTORY,
  };
};

export const putCashWalletHistory = payload => ({
  type: actionTypes.PUT_CASH_WALLET_HISTORY,
  payload,
});

export const getTransferFundReport = () => {
  return {
    type: actionTypes.GET_TRANSFER_FUND_REPORT,
  };
};

export const putTransferFundReport = payload => ({
  type: actionTypes.PUT_TRANSFER_FUND_REPORT,
  payload,
});

//
export const withdrawalRequestUSDT = (usdtAddress, amount, walletPassword) => ({
  type: actionTypes.WITHDRAWAL_REQUEST_USDT,
  usdtAddress,
  amount,
  walletPassword,
});

export const withdrawalRequestUSDTStatus = payload => {
  console.log('withdrawal status', payload);
  return {
    type: actionTypes.WITHDRAWAL_REQUEST_USDT_STATUS,
    payload,
  };
};

export const withdrawalRequestMDTX = (mdtxAddress, amount, walletPassword) => ({
  type: actionTypes.WITHDRAWAL_REQUEST_MDTX,
  mdtxAddress,
  amount,
  walletPassword,
});

export const withdrawalRequestMDTXStatus = payload => {
  return {
    type: actionTypes.WITHDRAWAL_REQUEST_MDTX_STATUS,
    payload,
  };
};

export const withdrawalRequestCryptoboxExchange = (
  name,
  email,
  phone,
  cryptoboxExchangeAddress,
  amount,
  walletPassword,
) => ({
  type: actionTypes.WITHDRAWAL_REQUEST_CRYPTOBOX_EXCHANGE,
  name,
  email,
  phone,
  cryptoboxExchangeAddress,
  amount,
  walletPassword,
});

export const withdrawalRequestCryptoboxExchangeStatus = payload => {
  return {
    type: actionTypes.WITHDRAWAL_REQUEST_CRYPTOBOX_EXCHANGE_STATUS,
    payload,
  };
};

export const withdrawalInvestCompounding = (amount, walletPassword) => ({
  type: actionTypes.WITHDRAWAL_INVEST_COMPOUNDING,
  amount,
  walletPassword,
});

export const withdrawalInvestCompoundingStatus = payload => {
  return {
    type: actionTypes.WITHDRAWAL_INVEST_COMPOUNDING_STATUS,
    payload,
  };
};

export const transferFundToInvestmentWallet = (amount, walletPassword) => ({
  type: actionTypes.TRANSFER_FUND_TO_INVESTMENT_WALLET,
  amount,
  walletPassword,
});

export const transferFundToInvestmentWalletStatus = payload => {
  return {
    type: actionTypes.TRANSFER_FUND_TO_INVESTMENT_WALLET_STATUS,
    payload,
  };
};

export const getInvestmentWalletBalance = () => {
  return {
    type: actionTypes.GET_INVESTMENT_WALLET_BALANCE,
  };
};

export const putInvestmentWalletBalance = payload => ({
  type: actionTypes.PUT_INVESTMENT_WALLET_BALANCE,
  payload,
});

export const getIncomeWalletBalance = () => {
  return {
    type: actionTypes.GET_INCOME_WALLET_BALANCE,
  };
};

export const putIncomeWalletBalance = payload => ({
  type: actionTypes.PUT_INCOME_WALLET_BALANCE,
  payload,
});

export const getTotalFundWalletBalance = () => {
  return {
    type: actionTypes.GET_TOTAL_FUND_WALLET_BALANCE,
  };
};

export const putTotalFundWalletBalance = payload => ({
  type: actionTypes.PUT_TOTAL_FUND_WALLET_BALANCE,
  payload,
});

export const getMDTXSecuWalletBalance = () => {
  return {
    type: actionTypes.GET_MDTX_SECU_WALLET_BALANCE,
  };
};

export const putMDTXSecuWalletBalance = payload => ({
  type: actionTypes.PUT_MDTX_SECU_WALLET_BALANCE,
  payload,
});

export const reloadAllWalletBalance = () => {
  return {
    type: actionTypes.RELOAD_ALL_WALLET_BALANCE,
  };
};

export const reloadAllWalletBalanceStatus = payload => ({
  type: actionTypes.RELOAD_ALL_WALLET_BALANCE_STATUS,
  payload,
});
export const getWithdrawalOnOff = () => {
  return {
    type: actionTypes.GET_WITHDRAWAL_ON_OFF,
  };
};

export const putWithdrawalOnOff = payload => ({
  type: actionTypes.PUT_WITHDRAWAL_ON_OFF,
  payload,
});
