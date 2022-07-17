import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/fetchClient';
import * as actions from '../actions';
import {API_KEY} from '../../config/Constants';

export function* knowledgeCenter() {
  try {
    const data = yield API.get(`?action=Getknowledgecenterdata&key=${API_KEY}`);
    console.log('saga  monthlyRankingClub', data);
    if (data.status === 200) {
      yield put(actions.putKnowledgeCenterList(data.data));
    }
  } catch (error) {
    yield put(actions.putKnowledgeCenterList(error.message));
  }
}
