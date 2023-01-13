import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  addfundhistory: [],
  withdrawalfund: null,
  withdrawalhistory: [],
  investmentfundhistory: [],
  cashwallethistory: [],
  transferfundreport: [],
  mdtxData: null,
  usdtData: null,
  transferResp: null,
  withdrawalRequestMdtxresp: null,
  withdrawalRequestUsdtresp: null,
  withdrawalTransWalletresp: null,
  withdrawalRequestCryptoExchresp: null,
  investmentWB: null,
  incomeWB: null,
  open_status: null,
};

const reducer = (state = initialState, action) => {
  console.log('reducer on wallet report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_WALLET:
      return {
        ...state,
        success: null,
        status: null,
      };

    case actionTypes.GET_ADD_FUND_HISTORY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ADD_FUND_HISTORY:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        addfundhistory: payload.data,
      });
    case actionTypes.GET_WITHDRAWAL_FUND:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_WITHDRAWAL_FUND:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        withdrawalfund: payload.data,
      });
    case actionTypes.GET_WITHDRAWAL_HISTORY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_WITHDRAWAL_HISTORY:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        withdrawalhistory: payload.data,
      });
    case actionTypes.GET_INVESTMENT_FUND_HISTORY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_INVESTMENT_FUND_HISTORY:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        investmentfundhistory: payload.data,
      });
    case actionTypes.GET_CASH_WALLET_HISTORY:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_CASH_WALLET_HISTORY:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        cashwallethistory: payload.data,
      });
    case actionTypes.GET_TRANSFER_FUND_REPORT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_TRANSFER_FUND_REPORT:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        transferfundreport: payload.data,
      });
    case actionTypes.ADD_FUND_TO_WALLET_VIA_MDTX:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.ADD_FUND_TO_WALLET_VIA_MDTX_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        mdtxData: payload.data.data,
      });
    case actionTypes.ADD_FUND_TO_WALLET_VIA_USDT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.ADD_FUND_TO_WALLET_VIA_USDT_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        usdtData: payload.data.data,
      });
    case actionTypes.TRANSFER_FUND_TO_OTHER:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.TRANSFER_FUND_TO_OTHER_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        transferResp: payload.data.message,
      });

    case actionTypes.WITHDRAWAL_REQUEST_USDT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.WITHDRAWAL_REQUEST_USDT_STATUS:
      console.log('payload on wallet reducer', payload.data.success);
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
        withdrawalRequestUsdtresp: payload.data.data,
      });
    case actionTypes.WITHDRAWAL_REQUEST_MDTX:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.WITHDRAWAL_REQUEST_MDTX_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
        withdrawalRequestMdtxresp: payload.data.data,
      });
    case actionTypes.WITHDRAWAL_REQUEST_CRYPTOBOX_EXCHANGE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.WITHDRAWAL_REQUEST_CRYPTOBOX_EXCHANGE_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
        withdrawalRequestCryptoExchresp: payload.data.data,
      });

    case actionTypes.WITHDRAWAL_INVEST_COMPOUNDING:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.WITHDRAWAL_INVEST_COMPOUNDING_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });
    case actionTypes.TRANSFER_FUND_TO_INVESTMENT_WALLET:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.TRANSFER_FUND_TO_INVESTMENT_WALLET_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        message: payload.data.message,
      });

    case actionTypes.GET_INVESTMENT_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_INVESTMENT_WALLET_BALANCE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        investmentWB: payload.data,
      });
    case actionTypes.GET_INCOME_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_INCOME_WALLET_BALANCE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        incomeWB: payload.data,
      });
    case actionTypes.GET_TOTAL_FUND_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_TOTAL_FUND_WALLET_BALANCE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        totalFundWB: payload.data,
      });

    case actionTypes.GET_MDTX_SECU_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MDTX_SECU_WALLET_BALANCE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        mdtxWB: payload.data,
      });

    case actionTypes.RELOAD_ALL_WALLET_BALANCE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.RELOAD_ALL_WALLET_BALANCE_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        // mdtxWB: payload.data,
      });

    case actionTypes.GET_WITHDRAWAL_ON_OFF:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_WITHDRAWAL_ON_OFF:
      return updateState(state, {
        status: payload.status,
        loading: false,
        open_status: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
