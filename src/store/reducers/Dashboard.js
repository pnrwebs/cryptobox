import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  employee: null,
  bank_account: null,
  employee_directory: [],
  success: false,
  approvers: [],
  att_data: [],
};

const reducer = (state = initialState, action) => {
  console.log('here is dashboard action ', action);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.UPDATE_MY_PROFILE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.UPDATE_MY_PROFILE_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
      });

    default:
      return state;
  }
};

export default reducer;
