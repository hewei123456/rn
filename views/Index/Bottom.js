import React, { PureComponent } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeView from './Home';
import TrendingView from './Trending';
import FavoriteView from './Favorite';
import MineView from './Mine';

import { connect } from 'react-redux';

export default class DynamicTabNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(): React.ReactNode {
    const { theme } = this.props;

    const TabBar = createAppContainer(createBottomTabNavigator({
      HomeView: {
        screen: HomeView,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons
              name='whatshot'
              size={28}
              style={{ color: tintColor }}/>
          ),
          tabBarLabel: '首页',
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
          tabBarLabel: '趋势',
        },
      },
      FavoriteView: {
        screen: FavoriteView,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons
              name='favorite'
              size={28}
              style={{ color: tintColor }}/>
          ),
          tabBarLabel: '收藏',
        },
      },
      MineView: {
        screen: MineView,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name='md-person'
              size={28}
              style={{ color: tintColor }}/>
          ),
          tabBarLabel: '我的',
        },
      },
    }, {
      tabBarComponent: connect(mapStateToProps)(TabBarComponent),
    }));
    return <TabBar/>;
  }
}

class TabBarComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />;
  }
}

const mapStateToProps = ({ colors }) => ({
  theme: colors.theme,
});

