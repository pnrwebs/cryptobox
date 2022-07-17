import * as actionTypes from './ActionTypes';

export const getKnowledgeCenterList = () => {
  return {
    type: actionTypes.GET_KNOWLEDGE_CENTER_LIST,
  };
};

export const putKnowledgeCenterList = payload => ({
  type: actionTypes.PUT_KNOWLEDGE_CENTER_LIST,
  payload,
});
