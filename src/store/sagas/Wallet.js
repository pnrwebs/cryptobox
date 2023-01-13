import {put, call, delay} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';
import {reloadAllWalletBalanceStatus} from '../actions';

export function* addFundHistory() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getaddfundhistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga add fund history', data);
    if (data.status === 200) {
      yield put(actions.putAddFundHistory(data.data));
    }
  } catch (error) {
    yield put(actions.putAddFundHistory(error.message));
  }
}

export function* withdrawalFund() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Showincomereportsmemberwise&key=${API_KEY}&member_user_id=${user_id}&transaction_type=Level Bonus`,
    );
    console.log('saga performanceReport', data);
    if (data.status === 200) {
      yield put(actions.putPerformanceIncome(data.data));
    }
  } catch (error) {
    yield put(actions.putPerformanceIncome(error.message));
  }
}

export function* withdrawalHistory() {
  let user_id = yield AsyncStorage.getItem('user_id');
  console.log('saga corporatePerformanceReport');

  try {
    const data = yield API.get(
      `?action=Getfundwithdrawalhistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga withdrawal history', data);
    if (data.status === 200) {
      yield put(actions.putWithdrawalHistory(data.data));
    }
  } catch (error) {
    yield put(actions.putWithdrawalHistory(error.message));
  }
}

export function* investmentFundHistory() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getinvestmentwallethistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga roiIncomeReport', data);
    if (data.status === 200) {
      yield put(actions.putInvestmentFundHistory(data.data));
    }
  } catch (error) {
    yield put(actions.putInvestmentFundHistory(error.message));
  }
}

export function* cashWalletHistory() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getcashwallethistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga cashwallethistory', data);
    if (data.status === 200) {
      yield put(actions.putCashWalletHistory(data.data));
    }
  } catch (error) {
    yield put(actions.putCashWalletHistory(error.message));
  }
}

export function* transferFundReport() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Gettransferfundhistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga transferFundReport', data);
    if (data.status === 200) {
      yield put(actions.putTransferFundReport(data.data));
    }
  } catch (error) {
    yield put(actions.putTransferFundReport(error.message));
  }
}

export function* addFundToWalletViaMdtx(action) {
  const {topUpAmount, selectNetwork} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: topUpAmount,
    action: 'Addfundviamdtxtbymemberid',
    key: API_KEY,
  };
  console.log('addFundToWalletViaMdtx bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('addFundToWalletViaMdtx response data', data);
    if (data.status === 200) {
      yield investmentWalletBalanceSaga();
      yield put(actions.addFundToWalletViaMDTXStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.addFundToWalletViaMDTXStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.addFundToWalletViaMDTXStatus(error.message));
  }
}

export function* addFundToWalletViaUsdt(action) {
  const {topUpAmount} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: topUpAmount,
    action: 'Addfundviausdtbymemberid',
    key: API_KEY,
  };
  console.log('addFundToWalletViaUsdt bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('addFundToWalletViaMdtx response data', data);
    if (data.status === 200) {
      yield investmentWalletBalanceSaga();
      yield put(actions.addFundToWalletViaUSDTStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.addFundToWalletViaUSDTStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.addFundToWalletViaUSDTStatus(error.message));
  }
}

export function* transferFundToOther(action) {
  const {amount, receiverId, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: amount,
    receiverid: receiverId,
    password: walletPassword,
    action: 'Fundtransfertoothermember',
    key: API_KEY,
  };
  console.log('Fundtransfertoothermember bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('Fundtransfertoothermember response data', data);
    if (data.status === 200) {
      yield investmentWalletBalanceSaga();
      yield put(actions.transferFundsToOtherStatus(data));
    } else {
      console.log('Fundtransfertoothermember', body);
      yield put(actions.transferFundsToOtherStatus(data.status));
    }
  } catch (error) {
    console.log('Fundtransfertoothermember', error.message);
    yield put(actions.transferFundsToOtherStatus(error.message));
  }
}

//
export function* withdrawalRequestUsdtSaga(action) {
  const {usdtAddress, amount, walletPassword} = action;

  console.log('action', action);
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: amount,
    address: usdtAddress,
    password: walletPassword,
    action: 'Withdrawfundviausdtbymemberid',
    key: API_KEY,
  };
  console.log('withdrawalRequestUsdtSaga body', body);
  try {
    const data = yield API.post('/', body);
    console.log('withdrawalRequestUsdtSaga response data', data);
    if (data.status === 200) {
      yield incomeWalletBalanceSaga();
      yield put(actions.withdrawalRequestUSDTStatus(data));
    } else {
      console.log('withdrawalRequestUsdtSaga', body);
      yield put(actions.withdrawalRequestUSDTStatus(data.status));
    }
  } catch (error) {
    console.log('withdrawalRequestUsdtSaga er', error.message);
    yield put(actions.withdrawalRequestUSDTStatus(error.message));
  }
}

export function* withdrawalRequestMdtxSaga(action) {
  const {mdtxAddress, amount, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: amount,
    address: mdtxAddress,
    password: walletPassword,
    action: 'Withdrawfundviamdtxbymemberid',
    key: API_KEY,
  };
  console.log('withdrawalRequestMdtxSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('withdrawalRequestMdtxSaga response data', data);
    if (data.status === 200) {
      yield incomeWalletBalanceSaga();
      yield put(actions.withdrawalRequestMDTXStatus(data));
    } else {
      console.log('withdrawalRequestMdtxSaga', body);
      yield put(actions.withdrawalRequestMDTXStatus(data.status));
    }
  } catch (error) {
    console.log('withdrawalRequestMdtxSaga', error.message);
    yield put(actions.withdrawalRequestMDTXStatus(error.message));
  }
}

export function* withdrawalRequestCryptoboxExchangeSaga(action) {
  const {name, email, phone, cryptoboxExchangeAddress, amount, walletPassword} =
    action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    name: name,
    email: email,
    exchange_account_number: cryptoboxExchangeAddress,
    phone: phone,
    amount: amount,
    password: walletPassword,
    action: 'Withdrawfundtocryptoboxexchangebymemberid',
    key: API_KEY,
  };
  console.log('withdrawalRequestCryptoboxExchangeSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('withdrawalRequestCryptoboxExchangeSaga response data', data);
    if (data.status === 200) {
      // yield incomeWalletBalanceSaga();
      yield put(actions.withdrawalRequestCryptoboxExchangeStatus(data));
    } else {
      console.log('withdrawalRequestCryptoboxExchangeSaga', body);
      yield put(actions.withdrawalRequestCryptoboxExchangeStatus(data.status));
    }
  } catch (error) {
    console.log('withdrawalRequestCryptoboxExchangeSaga', error.message);
    yield put(actions.withdrawalRequestCryptoboxExchangeStatus(error.message));
  }
}

export function* withdrawalInvestCompoundingSaga(action) {
  const {amount, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: amount,
    password: walletPassword,
    action: 'Makecompoundinginvestmentbymemberid',
    key: API_KEY,
  };
  console.log('withdrawalInvestCompoundingSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('withdrawalInvestCompoundingSaga response data', data);
    if (data.status === 200) {
      yield incomeWalletBalanceSaga();
      yield put(actions.withdrawalInvestCompoundingStatus(data));
    }
  } catch (error) {
    console.log('withdrawalInvestCompoundingSaga', error.message);
    yield put(actions.withdrawalInvestCompoundingStatus(error.message));
  }
}

export function* transferFundToInvestmentWalletSaga(action) {
  const {amount, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    amount: amount,
    password: walletPassword,
    action: 'Fundtransfertownaccount',
    key: API_KEY,
  };
  console.log('transferFundToInvestmentWalletSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('transferFundToInvestmentWalletSaga response data', data);
    if (data.status === 200) {
      yield incomeWalletBalanceSaga();
      yield put(actions.transferFundToInvestmentWalletStatus(data));
    } else {
      console.log('transferFundToInvestmentWalletSaga', body);
      yield put(actions.transferFundToInvestmentWalletStatus(data.status));
    }
  } catch (error) {
    console.log('transferFundToInvestmentWalletSaga', error.message);
    yield put(actions.transferFundToInvestmentWalletStatus(error.message));
  }
}

export function* investmentWalletBalanceSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmemberinvestmentwalletbalancebymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga transferFundReport', data);
    if (data.status === 200) {
      yield put(actions.putInvestmentWalletBalance(data.data));
    }
  } catch (error) {
    yield put(actions.putInvestmentWalletBalance(error.message));
  }
}

export function* incomeWalletBalanceSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmemberincomewalletbalancebymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga transferFundReport', data);
    if (data.status === 200) {
      yield put(actions.putIncomeWalletBalance(data.data));
    }
  } catch (error) {
    yield put(actions.putIncomeWalletBalance(error.message));
  }
}

export function* totalFundWalletBalanceSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmembertotalwithdrawalbalancebymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga transferFundReport', data);
    if (data.status === 200) {
      yield put(actions.putTotalFundWalletBalance(data.data));
    }
  } catch (error) {
    yield put(actions.putTotalFundWalletBalance(error.message));
  }
}

export function* mdtxWalletBalanceSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmembermdtxwalletbalancebymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga transferFundReport', data);
    if (data.status === 200) {
      yield put(actions.putMDTXSecuWalletBalance(data.data));
    }
  } catch (error) {
    yield put(actions.putMDTXSecuWalletBalance(error.message));
  }
}

export function* reloadAllWalletBalanceSaga() {
  try {
    yield investmentWalletBalanceSaga();
    yield incomeWalletBalanceSaga();
    yield totalFundWalletBalanceSaga();
    yield mdtxWalletBalanceSaga();
    yield delay(1000);
    yield reloadAllWalletBalanceStatus({data: true});
  } catch (error) {
    yield put(actions.reloadAllWalletBalanceStatus(error.message));
  }
}

export function* withdrawalOnOffSaga() {
  try {
    const data = yield API.get(`?action=Getcurrentweekdayname&key=${API_KEY}`);
    console.log('saga withdrawalOnOffSaga', data);
    if (data.status === 200) {
      yield put(actions.putWithdrawalOnOff(data.data));
    }
  } catch (error) {
    yield put(actions.putWithdrawalOnOff(error.message));
  }
}
