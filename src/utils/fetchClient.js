import axios from 'axios';
import * as URL from '../config/Urls';
import AsyncStorage from '@react-native-community/async-storage';

const fetchClient = () => {
  console.log('baseURL', URL.API_URL);
  const defaultOptions = {
    baseURL: URL.API_URL,
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(
    async function (config) {
      await AsyncStorage.getItem('auth-token').then(token => {
        config.headers['Authorization'] = token ? 'Bearer ' + token : null;
      });
      console.log('config=>', config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx will come here
      let respObj = {
        data: response.data ? response.data : [],
        status: response.status,
      };
      return respObj;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default fetchClient();
