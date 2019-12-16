import React, { PureComponent } from 'react';
import Navigator from '../../router/navigator';

import Bottom from './Bottom';

export default class IndexView extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  render(): React.ReactNode {
    Navigator.navigation = this.props.navigation;

    return (
      <Bottom/>
    );
  }
}
