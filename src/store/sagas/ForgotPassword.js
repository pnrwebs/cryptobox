import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* processForgotPasswordSaga(action) {
  const {email, username} = action;
  const body = {
    email: email,
    username: username,
    action: 'Forgotpasswordwithusername',
    key: API_KEY,
  };
  console.log('processForgotPasswordSaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('processForgotPasswordSaga response data', data);
    if (data.status === 200) {
      console.log('in 200');
      yield put(actions.processForgotPasswordStatus(data));
    } else {
      console.log('processForgotPasswordSaga else 200', body);
      yield put(actions.processForgotPasswordStatus(data));
    }
  } catch (error) {
    console.log('processForgotPasswordSaga error 200', error);
    yield put(actions.processForgotPasswordStatus(error));
  }
}
