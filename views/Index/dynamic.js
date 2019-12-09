import React, { Component } from 'react';
import { Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeView from './Home';
import TrendingView from './Trending';
import FavoriteView from './Favorite';
import MineView from './Mine';

import { primary } from '../../config/colors';

const TabBarLabel = ({ focused, label }) => (
  <Text style={{ textAlign: 'center', color: focused ? primary : 'gray' }}>{label}</Text>
);

const tabs = {
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
        <TabBarLabel focused={focused} label='首页'/>
      ),
    },
  },
  TrendingView: {
    screen: TrendingView,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name='trending-up'
          size={28}
          style={{ color: tintColor }}/>
      ),
      tabBarLabel: ({ focused }) => (
        <TabBarLabel focused={focused} label='趋势'/>
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
        <TabBarLabel focused={focused} label='收藏'/>
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
        <TabBarLabel focused={focused} label='我的'/>
      ),
    },
  },
};

export default class DynamicTabNavigator extends Component {

  render(): React.ReactNode {
    const TabBar = createAppContainer(createBottomTabNavigator(tabs, {
      // tabBarComponent: TabBarComponent,
    }));
    return <TabBar/>;
  }
}

class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }

  render(): React.ReactNode {
    const { routes, index } = this.props.navigation.state;
    if (routes[index].params) {
      const { theme } = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.activeTintColor}/>;
  }
}
