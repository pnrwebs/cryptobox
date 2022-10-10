import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  monthlyrankingclub: [],
  lifetimerankingrewards: [],
  zoomrewardlist: [],
  cryptoboxrewards: [],
  claimRewardResp: null,
  open_status: null,
};

const reducer = (state = initialState, action) => {
  console.log('reducer on income report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_INITIAL_STATE_NULL_REWARDS:
      return {
        ...state,
        success: null,
        status: null,
      };
    case actionTypes.GET_MONTHLY_RANKING_CLUB:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MONTHLY_RANKING_CLUB:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        monthlyrankingclub: payload.data,
      });
    case actionTypes.GET_LIFETIME_RANKING_REWARDS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_LIFETIME_RANKING_REWARDS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        lifetimerankingrewards: payload.data,
      });
    case actionTypes.GET_ZOOM_REWARD_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ZOOM_REWARD_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        zoomrewardlist: payload.data,
      });

    case actionTypes.CLAIM_MDTX_REWARD:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.CLAIM_MDTX_REWARD_STATUS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success: payload.data.success,
        claimRewardResp: payload.data.message,
      });

    case actionTypes.GET_ROI_ON_OFF:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ROI_ON_OFF:
      return updateState(state, {
        status: payload.status,
        loading: false,
        open_status: payload.data,
      });

    case actionTypes.GET_CRYPTOBOX_REWARD_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_CRYPTOBOX_REWARD_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        cryptoboxrewards: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
