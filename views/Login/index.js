import React, { PureComponent } from 'react';
import { View, Button } from 'react-native';
import Navigator from '../../router/navigator';


export default class LoginView extends PureComponent {
  render(): React.ReactNode {
    return (
      <View>
        <Button title='登陆' onPress={() => {
          Navigator.switchToIndex(this.props);
        }}/>
      </View>
    );
  }
}
