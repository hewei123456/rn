import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class PopularView extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>PopularView</Text>
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
