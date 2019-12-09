import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import PopularView from './Popular';

const TopTab = createAppContainer(createMaterialTopTabNavigator({
  Popular: {
    screen: PopularView,
    navigationOptions: {
      tabBarLabel: '最热',
    },
  },
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class HomeView extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <TopTab/>
      </View>
    );
  }
}
