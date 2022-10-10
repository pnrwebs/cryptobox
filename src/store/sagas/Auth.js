import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API_KEY} from '../../config/Constants';
import API from '../../utils/fetchClient';
import * as actions from '../actions';

// import * as URL from '../../config/Url';

export function* authenticate(action) {
  const {userid, password} = action;
  const body = {
    username: userid,
    password: password,
    action: 'Authenticateuser',
    key: API_KEY,
  };
  console.log('bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('autho saga data response from login', data);
    if (data.status === 200 && data.data.success === true) {
      console.log('autho saga', data);
      yield AsyncStorage.setItem('user_id', data.data.data.member_user_id);
      yield AsyncStorage.setItem('user_email_id', data.data.data.member_email);
      const expirationDate = new Date(new Date().getTime() + 31556952000);
      // yield AsyncStorage.setItem('auth-token', `${data.data.data.token}`);
      yield AsyncStorage.setItem('expirationDate', expirationDate.toString());
      yield getUserDetails();
      yield put(actions.loginSuccess(data.data));
    } else {
      console.log('bodybody1', body);
      yield put(actions.loginSuccess(data.data));
    }
  } catch (error) {
    console.log('bodybody2', error.message);
    yield put(actions.loginSuccess(error.message));
  }
}

export function* getUserDetails() {
  let user_id = yield AsyncStorage.getItem('user_id');
  console.log('on get user details user id ', user_id);
  try {
    const data = yield API.get(
      `?action=Getuserdetailwithmemberid&key=${API_KEY}&member_user_id=${user_id}`,
    );
    console.log('saga get memeber details', data);
    if (data.status === 200) {
      yield put(actions.putUserDetails(data.data));
    }
  } catch (error) {
    yield put(actions.putUserDetails(error.message));
  }
}

export function* getCountryListSaga() {
  try {
    const data = yield API.get(`?action=Getcountrylist&key=${API_KEY}`);
    console.log('saga get putCountryList details', data);
    if (data.status === 200) {
      yield put(actions.putCountryList(data.data));
    }
  } catch (error) {
    yield put(actions.putCountryList(error.message));
  }
}

export function* register(action) {
  console.log(action);
  const {
    sponsor,
    username,
    firstname,
    lastname,
    email,
    phone,
    loginpass,
    walletpass,
    country,
  } = action;
  const body = {
    sponsor: sponsor,
    username: username,
    first_name: firstname,
    last_name: lastname,
    email: email,
    mobile: phone,
    login_password: loginpass,
    wallet_password: walletpass,
    country: country,
    action: 'Memberregistration',
    key: API_KEY,
  };
  try {
    const data = yield API.post('/', body);
    console.log('signup', data);
    if (data.status === 200) {
      yield put(actions.signUpSuccess(data));
    } else {
      yield put(actions.signUpSuccess(data));
    }
  } catch (error) {
    yield put(actions.signUpSuccess(error.message));
  }
}

export function* changePassword(action) {
  console.log(action);
  const {password} = action;
  let emp_id = yield AsyncStorage.getItem('emp_id');
  const body = {
    emp_id: emp_id,
    password: password,
  };

  try {
    const data = yield API.post('changepassword', body);
    console.log('onsaga change pass', data);
    if (data.status === 200) {
      yield put(actions.changePasswordStatus(data));
    }
  } catch (error) {
    yield put(actions.changePasswordStatus(error.message));
  }
}

export function* checkAuthStatus() {
  console.log('check auth status called');
  const token = yield call([AsyncStorage, 'getItem'], 'auth-token');

  const expirationDate = parseInt(
    yield call([AsyncStorage, 'getItem'], 'expirationDate'),
    10,
  );
  const currentDate = yield new Date().getTime();
  if (!token) {
    yield put(actions.initLogout());
  } else if (currentDate > expirationDate) {
    yield put(actions.initLogout());
  } else {
    const url = `${URL.API_URL}details`;
    const body = {};
    try {
      const response = yield call(axios.post, url, body, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status !== 200) throw new Error('Please Login Again');
      yield AsyncStorage.setItem(
        'user-id',
        response.data.success.id.toString(),
      );
      yield put(actions.authStatusSuccess(response.data.success));
    } catch (error) {
      yield put(actions.authStatusFailure(error.message));
    }
  }
}

export function* logout() {
  // console.log('logout initiated......');
  // yield call([AsyncStorage, 'removeItem'], 'auth-token');
  yield call([AsyncStorage, 'removeItem'], 'user_id');
  yield call([AsyncStorage, 'removeItem'], 'user_email_id');
  yield put(actions.logoutSuccess(200));
}

export function* fastTrackQualifier() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=Getlastweekfasttrackbonusqualifier&key=${API_KEY}`,
    );
    console.log('saga fast track', data);
    if (data.status === 200) {
      yield put(actions.putLastWeekFastTrackQualifier(data.data));
    }
  } catch (error) {
    yield put(actions.putLastWeekFastTrackQualifier(error.message));
  }
}

export function* currentWeekFastTrackQualifier() {
  let user_id = yield AsyncStorage.getItem('user_id');

  try {
    const data = yield API.get(
      `?action=GetcurrentweekfasttrackbonusqualifierPositionStatus&key=${API_KEY}`,
    );
    console.log('saga current fast track', data);
    if (data.status === 200) {
      yield put(actions.putCurrentWeekFastTrackQualifier(data.data));
    }
  } catch (error) {
    yield put(actions.putCurrentWeekFastTrackQualifier(error.message));
  }
}

export function* updateProfile(action) {
  const {
    firstname,
    lastname,
    mobile,
    email,
    walletPassword,
    mdtxAddress,
    usdtAddress,
    country,
  } = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    first_name: firstname,
    last_name: lastname,
    contact: mobile,
    email: email,
    password: walletPassword,
    mdt_wallet_address: mdtxAddress,
    member_bitcoin_address: usdtAddress,
    member_country: country,
    action: 'Changememberprofilebymemberid',
    key: API_KEY,
  };
  console.log('updateProfile bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('updateProfile response data', data);
    if (data.status === 200) {
      yield getUserDetails();
      yield put(actions.submitUpdateProfileStatus(data));
    } else {
      console.log('submitPosRequestStatus', body);
      yield put(actions.submitUpdateProfileStatus(data.status));
    }
  } catch (error) {
    console.log('submitPosRequestStatus', error.message);
    yield put(actions.submitUpdateProfileStatus(error.message));
  }
}

export function* getAppVersionSaga() {
  try {
    const data = yield API.get(
      `?action=Getapplastupdatedversion&key=${API_KEY}`,
    );
    console.log('saga  Getapplastupdatedversion', data);
    if (data.status === 200) {
      yield put(actions.setAppVersion(data.data));
    }
  } catch (error) {
    yield put(actions.setAppVersion(error.message));
  }
}

export function* getSponsorNameSaga(action) {
  const {sponsorid} = action;

  try {
    const data = yield API.get(
      `?action=Verifysponsorexists&key=${API_KEY}&member_sponsor_id=${sponsorid}`,
    );
    console.log('saga  Getuserdetailwithmemberid', data);
    if (data.status === 200) {
      yield put(actions.putSponsorName(data));
    }
  } catch (error) {
    yield put(actions.putSponsorName(error.message));
  }
}
export function* loginOtpVerifySaga(action) {
  const {otp} = action;
  let user_id = yield AsyncStorage.getItem('user_id');
  const body = {
    member_user_id: user_id,
    otp: otp,
    action: 'Verifyloginotp',
    key: API_KEY,
  };
  console.log('loginOtpVerifySaga bodybody', body);
  try {
    const data = yield API.post('/', body);
    console.log('loginOtpVerifySaga response data', data);
    if (data.status === 200) {
      yield put(actions.submitLoginOtpVerifyStatus(data));
    } else {
      console.log('loginOtpVerifySaga', body);
      yield put(actions.submitLoginOtpVerifyStatus(data.status));
    }
  } catch (error) {
    console.log('loginOtpVerifySaga', error.message);
    yield put(actions.submitLoginOtpVerifyStatus(error.message));
  }
}
