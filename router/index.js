import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import IndexView from '../views/Index';
import LoginView from '../views/Login';
import WelcomeView from '../views/Welcome';

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
