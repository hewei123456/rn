import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from 'router/navigator';

export default class WelcomeView extends PureComponent {
  componentDidMount(): void {
    this.timer = setTimeout(() => {
      Navigator.switchToIndex(this.props);
    }, 500);
  }

  componentWillMount(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
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
