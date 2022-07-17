import * as actionTypes from './ActionTypes';

export const setInitialStateNullReward = () => ({
  type: actionTypes.SET_INITIAL_STATE_NULL_REWARDS,
});

export const getMonthlyRankingClub = () => {
  return {
    type: actionTypes.GET_MONTHLY_RANKING_CLUB,
  };
};

export const putMonthlyRankingClub = payload => ({
  type: actionTypes.PUT_MONTHLY_RANKING_CLUB,
  payload,
});

export const getLifetimeRankingRewards = () => {
  return {
    type: actionTypes.GET_LIFETIME_RANKING_REWARDS,
  };
};

export const putLifetimeRankingRewards = payload => ({
  type: actionTypes.PUT_LIFETIME_RANKING_REWARDS,
  payload,
});

export const getZoomRewardList = () => {
  return {
    type: actionTypes.GET_ZOOM_REWARD_LIST,
  };
};

export const putZoomRewardList = payload => ({
  type: actionTypes.PUT_ZOOM_REWARD_LIST,
  payload,
});

export const claimMDTXReward = (
  zoomUsername,
  sixDigitZoomFlashCode,
  mdtxWalletAddress,
  walletPassword,
) => ({
  type: actionTypes.CLAIM_MDTX_REWARD,
  zoomUsername,
  sixDigitZoomFlashCode,
  mdtxWalletAddress,
  walletPassword,
});

export const claimMDTXRewardStatus = payload => {
  return {
    type: actionTypes.CLAIM_MDTX_REWARD_STATUS,
    payload,
  };
};

export const getROIOnOff = () => {
  return {
    type: actionTypes.GET_ROI_ON_OFF,
  };
};

export const putROIOnOff = payload => ({
  type: actionTypes.PUT_ROI_ON_OFF,
  payload,
});
