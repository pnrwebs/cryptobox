import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* sendOtpOnEmail(action) {
  const {zoomUsername} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    action: 'Send_mobileapp_otp',
    key: API_KEY,
  };
  console.log('sendOtpOnEmail bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('sendOtpOnEmail response data', data);
    if (data.status === 200) {
      console.log('in 200');
      yield put(actions.sendEmailOTPStatus(data));
    } else {
      console.log('sendOtpOnEmail else 200', body);
      yield put(actions.sendEmailOTPStatus(data));
    }
  } catch (error) {
    console.log('sendOtpOnEmail error 200', error);
    yield put(actions.sendEmailOTPStatus(error));
  }
}
