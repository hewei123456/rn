import React from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeView from './Home';
import MineView from './Mine';

const primary = '#1890ff';

const TabBar = createAppContainer(createBottomTabNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      title: '首页',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name='md-home'
          size={28}
          style={{ color: focused ? primary : 'gray' }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>首页</Text>
      ),
    },
  },
  MineView: {
    screen: MineView,
    navigationOptions: {
      title: '我的', tabBarIcon: ({ focused }) => (
        <Ionicons
          name='md-person'
          size={28}
          style={{ color: focused ? primary : 'gray' }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>我的</Text>
      ),
    },
  },
}));

export default class IndexView extends React.Component {
  render(): React.ReactNode {
    return (
      <TabBar/>
    );
  }
}
