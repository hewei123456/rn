import React from 'react';
import { View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeView from './Home';
import MineView from './Mine';
import TrendingView from './Trending';
import FavoriteView from './Favorite';

const primary = '#1890ff';

const TabBar = createAppContainer(createBottomTabNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialIcons
          name='whatshot'
          size={28}
          style={{ color: focused ? primary : 'gray' }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>首页</Text>
      ),
    },
  },
  TrendingView: {
    screen: TrendingView,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialIcons
          name='trending-up'
          size={28}
          style={{ color: focused ? primary : 'gray' }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>趋势</Text>
      ),
    },
  },
  FavoriteView: {
    screen: FavoriteView,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialIcons
          name='favorite'
          size={28}
          style={{ color: focused ? primary : 'gray' }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>收藏</Text>
      ),
    },
  },
  MineView: {
    screen: MineView,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
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
}, {
  header: null,
}));

export default class IndexView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  render(): React.ReactNode {

    return (
      <TabBar/>
    );
  }
}
