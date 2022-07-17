import * as actionTypes from './ActionTypes';

export const getDashboardIncomeDetail = () => {
  return {
    type: actionTypes.GET_DASHBOARD_INCOME_DETAIL,
  };
};

export const putDashboardIncomeDetail = payload => ({
  type: actionTypes.PUT_DASHBOARD_INCOME_DETAIL,
  payload,
});

export const getManagementPerformanceIncome = () => {
  return {
    type: actionTypes.GET_MANAGEMENT_PERFORMANCE_INCOME,
  };
};

export const putManagementPerformanceIncome = payload => ({
  type: actionTypes.PUT_MANAGEMENT_PERFORMANCE_INCOME,
  payload,
});

export const getPerformanceIncome = () => {
  return {
    type: actionTypes.GET_PERFORMANCE_INCOME,
  };
};

export const putPerformanceIncome = payload => ({
  type: actionTypes.PUT_PERFORMANCE_INCOME,
  payload,
});

export const getCorporatePerformanceIncome = () => {
  return {
    type: actionTypes.GET_CORPORATE_PERFORMANCE_INCOME,
  };
};

export const putCorporatePerformanceIncome = payload => ({
  type: actionTypes.PUT_CORPORATE_PERFORMANCE_INCOME,
  payload,
});

export const getRoiIncome = () => {
  return {
    type: actionTypes.GET_ROI_INCOME,
  };
};

export const putRoiIncome = payload => ({
  type: actionTypes.PUT_ROI_INCOME,
  payload,
});

export const getBusinessFlushReport = () => {
  return {
    type: actionTypes.GET_BUSINESS_FLUSH_REPORT,
  };
};

export const putBusinessFlushReport = payload => ({
  type: actionTypes.PUT_BUSINESS_FLUSH_REPORT,
  payload,
});

export const getLevelwisePreformanceIncome = showLevel => {
  return {
    type: actionTypes.GET_LEVELWISE_PERFORMANCE_INCOME,
    showLevel,
  };
};

export const putLevelwisePerformanceIncome = payload => ({
  type: actionTypes.PUT_LEVELWISE_PERFORMANCE_INCOME,
  payload,
});

export const getWeekwisePerformanceIncome = () => {
  return {
    type: actionTypes.GET_WEEKWISE_PERFORMANCE_INCOME,
  };
};

export const putWeekwisePerformanceIncome = payload => ({
  type: actionTypes.PUT_WEEKWISE_PERFORMANCE_INCOME,
  payload,
});
