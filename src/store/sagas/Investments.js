import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

import {investmentWalletBalanceSaga} from './Wallet';

export function* myInvestments() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmemberinvestmenthistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga add myInvestments', data);
    if (data.status === 200) {
      yield put(actions.putMyInvestments(data.data));
    }
  } catch (error) {
    yield put(actions.putMyInvestments(error.message));
  }
}

export function* myCompoundInvestments() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmembercompoundinghistorybymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga myCompoundInvestments', data);
    if (data.status === 200) {
      yield put(actions.putMyCompoundInvestment(data.data));
    }
  } catch (error) {
    yield put(actions.putMyCompoundInvestment(error.message));
  }
}

export function* investmentPackagesSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getinvestmentpackage&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga Getinvestmentpackage', data);
    if (data.status === 200) {
      yield put(actions.putInvestmentPackage(data.data));
    }
  } catch (error) {
    yield put(actions.putInvestmentPackage(error.message));
  }
}

export function* makeInvestmentSaga(action) {
  const {packageId, walletPassword} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    package_id: packageId,
    password: walletPassword,
    action: 'Makeinvestmentbymemberid',
    key: API_KEY,
  };
  console.log('makeInvestmentSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('makeInvestmentSaga response data', data);
    if (data.status === 200) {
      yield investmentPackagesSaga();
      yield investmentWalletBalanceSaga();
      yield put(actions.makeInvestmentStatus(data));
    } else {
      console.log('makeInvestmentSaga', body);
      yield put(actions.makeInvestmentStatus(data.status));
    }
  } catch (error) {
    console.log('makeInvestmentSaga', error.message);
    yield put(actions.makeInvestmentStatus(error.message));
  }
}
