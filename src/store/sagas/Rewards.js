import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* monthlyRankingClub() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmonthlyrankingclublistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga  monthlyRankingClub', data);
    if (data.status === 200) {
      yield put(actions.putMonthlyRankingClub(data.data));
    }
  } catch (error) {
    yield put(actions.putMonthlyRankingClub(error.message));
  }
}

export function* lifetimeRankingRewards() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getlifetimerankingclublistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga lifetimeRankingRewards', data);
    if (data.status === 200) {
      yield put(actions.putLifetimeRankingRewards(data.data));
    }
  } catch (error) {
    yield put(actions.putLifetimeRankingRewards(error.message));
  }
}

export function* zoomRewardList() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getzoomrewardclaimlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga zoomRewardList', data);
    if (data.status === 200) {
      yield put(actions.putZoomRewardList(data.data));
    }
  } catch (error) {
    yield put(actions.putZoomRewardList(error.message));
  }
}

export function* getCryptoboxRewardsListSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getcryptoboxrewardlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga getCryptoboxRewardsListSaga', data);
    if (data.status === 200) {
      yield put(actions.putCryptoboxRewardList(data.data));
    }
  } catch (error) {
    yield put(actions.putCryptoboxRewardList(error.message));
  }
}
export function* getCryptoboxRegionalRewardsListSaga() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getnewcryptoboxrewardlistbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga getCryptoboxRegionalRewardsListSaga', data);
    if (data.status === 200) {
      yield put(actions.putCryptoboxRegionalRewardList(data.data));
    }
  } catch (error) {
    yield put(actions.putCryptoboxRegionalRewardList(error.message));
  }
}

export function* claimMdtxReward(action) {
  const {
    zoomUsername,
    sixDigitZoomFlashCode,
    mdtxWalletAddress,
    walletPassword,
  } = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    zoomusername: zoomUsername,
    zoom_code: sixDigitZoomFlashCode,
    mdtx_address: mdtxWalletAddress,
    passcode: walletPassword,
    action: 'Zoomrewardclaimbymemberid',
    key: API_KEY,
  };
  console.log('claimMdtxReward bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('claimMdtxReward response data', data);
    if (data.status === 200) {
      console.log('in 200');
      yield put(actions.claimMDTXRewardStatus(data));
    } else {
      console.log('claimMdtxReward else 200', body);
      yield put(actions.claimMDTXRewardStatus(data));
    }
  } catch (error) {
    console.log('claimMdtxReward error 200', error);
    yield put(actions.claimMDTXRewardStatus(error));
  }
}

export function* ROIOnOffSage() {
  try {
    const data = yield API.get(
      `?action=Checkzoomrewardtimeisonoroff&key=${API_KEY}`,
    );
    console.log('saga ROIOnOffSage', data);
    if (data.status === 200) {
      yield put(actions.putROIOnOff(data.data));
    }
  } catch (error) {
    yield put(actions.putROIOnOff(error.message));
  }
}
