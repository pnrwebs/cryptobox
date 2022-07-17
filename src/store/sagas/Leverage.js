import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* myLeverage() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getdirectmemberlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga add myLeverage', data);
    if (data.status === 200) {
      yield put(actions.putMyLeverage(data.data));
    }
  } catch (error) {
    yield put(actions.putMyLeverage(error.message));
  }
}

export function* teamLeverage() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getdownlinememberlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga teamLeverage', data);
    if (data.status === 200) {
      yield put(actions.putTeamLeverage(data.data));
    }
  } catch (error) {
    yield put(actions.putTeamLeverage(error.message));
  }
}
