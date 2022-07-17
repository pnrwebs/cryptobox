import * as actionTypes from './ActionTypes';

export const getMyLeverage = () => {
  return {
    type: actionTypes.GET_MY_LEVERAGE,
  };
};

export const putMyLeverage = payload => ({
  type: actionTypes.PUT_MY_LEVERAGE,
  payload,
});

export const getTeamLeverage = () => {
  return {
    type: actionTypes.GET_TEAM_LEVERAGE,
  };
};

export const putTeamLeverage = payload => ({
  type: actionTypes.PUT_TEAM_LEVERAGE,
  payload,
});
