import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  sendotpstatus: null,
};

const reducer = (state = initialState, action) => {
  console.log('send otp payload', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SEND_EMAIL_OTP:
      return {
        ...state,
        success: null,
        status: null,
      };
    case actionTypes.SEND_EMAIL_OTP_STATUS:
      return {
        ...state,
        loading: true,
        status: null,
        sendotpstatus: payload.data.data.return_otp,
      };

    default:
      return state;
  }
};

export default reducer;
