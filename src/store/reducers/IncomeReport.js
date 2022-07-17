import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  managementperformanceincome: [],
  performanceincome: [],
  corporateperformanceincome: [],
  roiincome: [],
  businessflushreport: [],
  levelperformanceincome: [],
  weekperformanceincome: [],
  dashboardincomedetails: null,
};

const reducer = (state = initialState, action) => {
  console.log('reducer on income report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_DASHBOARD_INCOME_DETAIL:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_DASHBOARD_INCOME_DETAIL:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        dashboardincomedetails: payload.data,
      });

    case actionTypes.GET_MANAGEMENT_PERFORMANCE_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_MANAGEMENT_PERFORMANCE_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        managementperformanceincome: payload.data,
      });
    case actionTypes.GET_PERFORMANCE_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_PERFORMANCE_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        performanceincome: payload.data,
      });
    case actionTypes.GET_CORPORATE_PERFORMANCE_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_CORPORATE_PERFORMANCE_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        corporateperformanceincome: payload.data.data,
      });
    case actionTypes.GET_ROI_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ROI_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        roiincome: payload.data,
      });
    case actionTypes.GET_BUSINESS_FLUSH_REPORT:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_BUSINESS_FLUSH_REPORT:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        businessflushreport: payload.data,
      });
    case actionTypes.GET_LEVELWISE_PERFORMANCE_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_LEVELWISE_PERFORMANCE_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        levelperformanceincome: payload.data,
      });
    case actionTypes.GET_WEEKWISE_PERFORMANCE_INCOME:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_WEEKWISE_PERFORMANCE_INCOME:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        weekperformanceincome: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
