import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success: null,
  knowledgecenterlist: [],
};

const reducer = (state = initialState, action) => {
  console.log('reducer on knowledge report', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.GET_KNOWLEDGE_CENTER_LIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_KNOWLEDGE_CENTER_LIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        // success: true,
        knowledgecenterlist: payload.data,
      });

    default:
      return state;
  }
};

export default reducer;
