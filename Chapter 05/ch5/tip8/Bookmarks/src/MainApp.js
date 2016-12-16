import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import AppNavigator from './views/AppNavigator';

const MainApp = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default MainApp;
