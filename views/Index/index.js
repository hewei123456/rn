import React from 'react';
import { View, Text } from 'react-native';

import DynamicTabNavigator from './dynamic';

export default class IndexView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  render(): React.ReactNode {

    return (
      <DynamicTabNavigator/>
    );
  }
}
