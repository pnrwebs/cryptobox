import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  myleverage: [],
  teamleverage: [],
};

const reducer = (state = initialState, action) => {
  console.log('reducer on income report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_MY_LEVERAGE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MY_LEVERAGE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        myleverage: payload.data,
      });
    case actionTypes.GET_TEAM_LEVERAGE:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_TEAM_LEVERAGE:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        teamleverage: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
