import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* managementPerformanceReport() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Showincomereportsmemberwise&key=${API_KEY}&member_user_id=${user_id}&transaction_type=Fast Track Bonus`,
    );
    console.log('saga managementPerformanceReport', data);
    if (data.status === 200) {
      yield put(actions.putManagementPerformanceIncome(data.data));
    }
  } catch (error) {
    yield put(actions.putManagementPerformanceIncome(error.message));
  }
}

export function* performanceReport() {
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

export function* corporatePerformanceReport() {
  let user_id = yield AsyncStorage.getItem('user_id');
  console.log('saga corporatePerformanceReport');

  try {
    const data = yield API.get(
      `?action=Showincomereportsmemberwise&key=${API_KEY}&member_user_id=${user_id}&transaction_type=Club Bonus`,
    );
    console.log('saga corporatePerformanceReport', data);
    if (data.status === 200) {
      yield put(actions.putCorporatePerformanceIncome(data));
    }
  } catch (error) {
    yield put(actions.putCorporatePerformanceIncome(error.message));
  }
}

export function* roiIncomeReport() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Showincomereportsmemberwise&key=${API_KEY}&member_user_id=${user_id}&transaction_type=ROI Income`,
    );
    console.log('saga roiIncomeReport', data);
    if (data.status === 200) {
      yield put(actions.putRoiIncome(data.data));
    }
  } catch (error) {
    yield put(actions.putRoiIncome(error.message));
  }
}

export function* businessFlushReport() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmemberflushreportbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga businessFlushReport', data);
    if (data.status === 200) {
      yield put(actions.putBusinessFlushReport(data.data));
    }
  } catch (error) {
    yield put(actions.putBusinessFlushReport(error.message));
  }
}

export function* levelwisePerformanceReport(action) {
  const {showLevel} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  console.log('saga levelwisePerformanceReport====level', showLevel);
  try {
    const data = yield API.get(
      `?action=Getperformanceincomelevelwisebymemberid&key=${API_KEY}&member_user_id=${user_id}&level=${showLevel}`,
    );
    console.log('saga levelwisePerformanceReport', data);
    if (data.status === 200) {
      yield put(actions.putLevelwisePerformanceIncome(data.data));
    }
  } catch (error) {
    yield put(actions.putLevelwisePerformanceIncome(error.message));
  }
}

export function* weekwisePerformanceReport() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getperformanceincomeweekwisebymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga weekwisePerformanceReport', data);
    if (data.status === 200) {
      yield put(actions.putWeekwisePerformanceIncome(data.data));
    }
  } catch (error) {
    yield put(actions.putWeekwisePerformanceIncome(error.message));
  }
}

export function* dashboardIncomeDetail() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getmemberincomedetailpagecountbymemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga dashboard income details', data);
    if (data.status === 200) {
      yield put(actions.putDashboardIncomeDetail(data.data));
    }
  } catch (error) {
    yield put(actions.putDashboardIncomeDetail(error.message));
  }
}
