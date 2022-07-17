/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigation from './src/navigations/NavigationContainer';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './src/store/reducers';
import rootSaga from './src/store/sagas';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
