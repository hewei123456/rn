import React from 'react';
import { View, Text, Button } from 'react-native';

export default class TrendingView extends React.Component {
  render(): React.ReactNode {
    const { navigation } = this.props;

    return (
      <View>
        <Text>TrendingView</Text>
        <Button title='修改主题' onPress={() => {
          navigation.setParams({
            theme: {
              tintColor: '#e4393c',
              updateTime: new Date().getTime(),
            },
          });
        }}/>
      </View>
    );
  }
}
