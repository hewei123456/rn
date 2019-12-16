import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { SwitchNavigator } from './router';

import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

const Index = createAppContainer(SwitchNavigator);

export default class App extends Component {
  render(): React.ReactNode {
    return <Provider store={store}>
      <Index/>
    </Provider>;
  }
};
