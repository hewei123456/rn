import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeView from './Home';
import TrendingView from './Trending';
import FavoriteView from './Favorite';
import MineView from './Mine';

import { connect } from 'react-redux';

const TabBarLabel = ({ focused, label, activeColor }) => {
  const style = { textAlign: 'center', color: focused ? activeColor : '#aaa' };
  return (
    <Text style={style}>{label}</Text>
  );
};

class Bottom extends PureComponent {
  constructor(props) {
    super(props);
  }

  getActiveColor = focused => ({ color: focused ? this.props.theme : '#aaa' });

  render(): React.ReactNode {
    const { theme } = this.props;

    const TabBar = createAppContainer(createBottomTabNavigator({
      HomeView: {
        screen: HomeView,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name='whatshot'
              size={28}
              style={this.getActiveColor(focused)}/>
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} activeColor={theme} label='首页'/>
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
              style={this.getActiveColor(focused)}/>
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} activeColor={theme} label='趋势'/>
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
              style={this.getActiveColor(focused)}/>
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} activeColor={theme} label='收藏'/>
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
              style={this.getActiveColor(focused)}/>
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} activeColor={theme} label='我的'/>
          ),
        },
      },
    }, {}));
    return <TabBar/>;
  }
}

const mapStateToProps = ({ colors }) => ({
  theme: colors.theme,
});

export default connect(mapStateToProps)(Bottom);
