import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import Navigator from './navigator';

import IndexView from '../views/Index';
import LoginView from '../views/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class WelcomeView extends Component {
  componentDidMount(): void {
    this.timer = setTimeout(() => {
      Navigator.switchToIndex(this.props);
    }, 2000);
  }

  componentWillMount(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator({
  Index: {
    screen: IndexView,
  },
}, {
  defaultNavigationOptions: {},
});

const AuthNavigator = createStackNavigator({
  LoginView: {
    screen: LoginView,
    navigationOptions: {
      title: '登陆页',
    },
  },
}, {
  defaultNavigationOptions: {},
});

export const SwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeView,
  },
  MainStackNavigator,
  AuthNavigator,
});
