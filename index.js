import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { SwitchNavigator } from './router';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './store';

const { store, persistor } = configStore();

const Index = createAppContainer(SwitchNavigator);

export class App extends Component {
  render(): React.ReactNode {
    return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index/>
      </PersistGate>
    </Provider>;
  }
}

AppRegistry.registerComponent(appName, () => App);
