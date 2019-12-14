import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import Navigator from '../../../../router/navigator';

export default class PopularView extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>{this.props.tabLabel}</Text>
        <Button title='跳转详情页' onPress={() => {
          Navigator.navigateToView('Detail');
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
