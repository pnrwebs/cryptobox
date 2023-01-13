import * as actionTypes from './ActionTypes';

export const sendEmailOTP = () => ({
  type: actionTypes.SEND_EMAIL_OTP,
});

export const sendEmailOTPStatus = payload => {
  return {
    type: actionTypes.SEND_EMAIL_OTP_STATUS,
    payload,
  };
};

export const emailOTPVerify = otp => ({
  type: actionTypes.EMAIL_OTP_VERIFY,
  otp,
});

export const emailOTPVerifyStatus = payload => {
  return {
    type: actionTypes.EMAIL_OTP_VERIFY_STATUS,
    payload,
  };
};
