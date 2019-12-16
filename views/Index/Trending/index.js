import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

export default class TrendingView extends PureComponent {
  render(): React.ReactNode {
    const { navigation } = this.props;

    return (
      <View>
        <Text>TrendingView</Text>
      </View>
    );
  }
}
