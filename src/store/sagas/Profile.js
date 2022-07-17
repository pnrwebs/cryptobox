import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';
import {investmentWalletBalanceSaga} from './Wallet';

export function* subAccounts() {
  let user_id = yield AsyncStorage.getItem('user_id');
  let user_email_id = yield AsyncStorage.getItem('user_email_id');

  try {
    const data = yield API.get(
      `?action=Getsubaccountlistbymemberid&key=${API_KEY}&member_user_id=${user_id}&member_email=${user_email_id}`,
    );
    console.log('saga add subAccounts', data);
    if (data.status === 200) {
      yield put(actions.putSubAccounts(data.data));
    }
  } catch (error) {
    yield put(actions.putSubAccounts(error.message));
  }
}

export function* myTickets() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getsupportticketlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga myTickets', data);
    if (data.status === 200) {
      yield put(actions.putMyTickets(data.data));
    }
  } catch (error) {
    yield put(actions.putMyTickets(error.message));
  }
}

export function* submitPosRequest(action) {
  const {firstname, lastname, mobile, email, address, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    first_name: firstname,
    last_name: lastname,
    mobile: mobile,
    email: email,
    address: address,
    passcode: walletPassword,
    action: 'Applyforposcardbymemberid',
    key: API_KEY,
  };
  console.log('bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('pos response data', data);
    if (data.status === 200) {
      yield investmentWalletBalanceSaga();
      yield put(actions.submitPosRequestStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.submitPosRequestStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.submitPosRequestStatus(error.message));
  }
}

export function* submitSupportRequest(action) {
  const {value, subject, query} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    category: value,
    subject: subject,
    message: query,
    action: 'Createsupportticketbymemberid',
    key: API_KEY,
  };
  console.log('submitSupportRequestStatus bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('submitSupportRequestStatus response data', data);
    if (data.status === 200) {
      yield myTickets();
      yield put(actions.submitSupportRequestStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.submitSupportRequestStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.submitSupportRequestStatus(error.message));
  }
}

export function* changeLoginPassword(action) {
  const {oldLoginPass, newLoginPass, newLoginConfPass} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    old_password: oldLoginPass,
    new_password: newLoginPass,
    confirm_new_password: newLoginConfPass,
    action: 'Changeloginpasswordbymemberid',
    key: API_KEY,
  };
  console.log('submitChangeLoginPasswordStatus bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('submitChangeLoginPasswordStatus response data', data);
    if (data.status === 200) {
      yield put(actions.submitChangeLoginPasswordStatus(data));
    } else {
      console.log('submitChangeLoginPasswordStatus', body);
      yield put(actions.submitChangeLoginPasswordStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.submitChangeLoginPasswordStatus(error.message));
  }
}

export function* changeWalletPassword(action) {
  const {oldWalletPass, newWalletPass, newWalletConfPass} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    old_password: oldWalletPass,
    new_password: newWalletPass,
    confirm_new_password: newWalletConfPass,
    action: 'Changewalletpasswordbymemberid',
    key: API_KEY,
  };
  console.log('submitSupportRequestStatus bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('submitSupportRequestStatus response data', data);
    if (data.status === 200) {
      yield put(actions.submitChangeWalletPasswordStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.submitChangeWalletPasswordStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.submitChangeWalletPasswordStatus(error.message));
  }
}
