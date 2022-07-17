import { put, call } from "redux-saga/effects";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utils/fetchClient";
import * as actions from "../actions";
import moment from "moment";

export function* getUserDetails() {
  console.log("user detaisk");
  let date = new Date();
  let finalDate = moment(date).format("YYYY-MM-DD");

  console.log("final date on details", finalDate);
  const body = {
    current_date: finalDate,
  };

  try {
    const data = yield API.post("details", body);
    console.log("dashboard details", data);
    if (data.status === 200) {
      yield AsyncStorage.setItem("emp_id", `${data.data.data.user.id}`);
      yield getApprovers();
      yield put(actions.putUserDetail(data));
    } else {
      yield put(actions.putUserDetail(data));
    }
  } catch (error) {
    console.log("user detais ", error);
    yield put(actions.putUserDetail(error.message));
  }
}

export function* updateMyProfile(action) {
  const { father_name, email, telephone, gender, dob, blood_group } =
    action.data;
  // console.log(action.data);
  let emp_id = yield AsyncStorage.getItem("emp_id");
  const body = {
    emp_id: emp_id,
    father_name: father_name,
    email: email,
    telephone: telephone,
    gender: gender,
    dob: dob,
    blood_group: blood_group,
  };
  // console.log(body);
  try {
    const data = yield API.post("update-profile", body);
    console.log("update profile", data);
    if (data.status === 200) {
      yield getUserDetails();
      yield put(actions.updateMyProfileStatus(data));
    }
  } catch (error) {
    // console.log('user detais ', error);
    yield put(actions.updateMyProfileStatus(data));
  }
}

export function* getBankAccount() {
  let emp_id = yield AsyncStorage.getItem("emp_id");
  try {
    const data = yield API.get(`get-bank-details?emp_id=${emp_id}`);
    console.log("bank details details", data);
    if (data.status === 200) {
      yield put(actions.setBankAccount(data));
    } else {
      yield put(actions.setBankAccount(data));
    }
  } catch (error) {
    yield put(actions.setBankAccount(error.message));
  }
}

export function* updateBankAccount(action) {
  const { account_number, bank_branch, bank_name, bank_verification_number } =
    action.data;
  console.log(action);
  let emp_id = yield AsyncStorage.getItem("emp_id");
  const body = {
    emp_id: emp_id,
    account_number: account_number,
    bank_name: bank_name,
    bank_branch: bank_branch,
    bank_verification_number: bank_verification_number,
  };

  try {
    const data = yield API.post("update-bank-details", body);
    // console.log('update bank bank bank==>>', data);
    if (data.status === 200) {
      yield getBankAccount();
      yield put(actions.updateBankAccountStatus(data));
    }
  } catch (error) {
    // console.log('user update bank details ', error);
    yield put(actions.updateBankAccountStatus(data));
  }
}

export function* getEmployeeDirectory(action) {
  const { employeeName, userId } = action;
  console.log("emp dir", action);
  try {
    const data = yield API.get(
      `get-employee-directory?user_id=${userId}&emp_name=${employeeName}`
    );
    console.log("emp directory resp", data);
    if (data.status === 200) {
      yield put(actions.putEmployeeDirectory(data.data));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.putEmployeeDirectory(error.message));
  }
}

export function* getApprovers() {
  try {
    const data = yield API.get(`get-approvers`);
    console.log("get approvers", data);
    if (data.status === 200) {
      yield put(actions.putApprovers(data.data));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.putApprovers(error.message));
  }
}

export function* updateAttendanceSaga() {
  let emp_id = yield AsyncStorage.getItem("emp_id");

  var finalTime = moment().format("HH:MM");
  let finalDate = moment().format("YYYY-MM-DD");
  console.log("att current date", finalDate.toLocaleString());
  console.log("att current date", moment().format("HH:MM"));
  const body = {
    emp_id: emp_id,
    current_date: finalDate,
    current_time: finalTime,
  };
  try {
    const data = yield API.post(`update-attendance`, body);
    if (data.status === 200) {
      yield getUserDetails();
      yield put(actions.updateAttendanceStatus(data));
    }
  } catch (error) {
    yield put(actions.updateAttendanceStatus(error.message));
  }
}
