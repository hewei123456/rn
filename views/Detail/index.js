import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '详情页',
  });

  render(): React.ReactNode {
    return (
      <View>
        <Text>DetailView</Text>
      </View>
    );
  }
}
