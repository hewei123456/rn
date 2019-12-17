import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { updateTheme } from '../../../store/colors';

class TrendingView extends PureComponent {
  render(): React.ReactNode {

    return (
      <View>
        <Text>TrendingView</Text>
        <Button title='更换主题' onPress={() => {
          console.log(this.props.theme);
          this.props.updateTheme(this.props.theme === '#1890ff' ? '#e4393c' : '#1890ff');
        }}/>
      </View>
    );
  }
}

const mapStateToProps = ({ colors }) => ({
  theme: colors.theme,
});

const mapDispatchToProps = dispatch => ({
  updateTheme(theme) {
    dispatch(updateTheme(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingView);
