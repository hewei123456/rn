import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import PopularView from './Popular';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.tabs = ['Java', 'Android', 'IOS',
      'React', 'React Native', 'PHP', 'Javascript'];
  }

  renderTab = () => {
    let tabs = {};
    this.tabs.forEach((tab, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularView {...props} tabLabel={tab}/>,
        navigationOptions: {
          tabBarLabel: tab,
        },
      };
    });
    return tabs;
  };


  render(): React.ReactNode {
    const tabs = this.renderTab();
    const TopTab = createAppContainer(createMaterialTopTabNavigator(tabs, {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        indicatorStyle: styles.indicatorStyle,
        scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: '#a67',
        },
        labelStyle: styles.labelStyle,
      },
    }));
    return (
      <View style={styles.container}>
        <TopTab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});
