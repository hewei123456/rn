import React, { PureComponent } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import Navigator from '../../../../router/navigator';
import { updateTheme } from '../../../../store/colors';

class PopularView extends PureComponent {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>{this.props.tabLabel}</Text>
        {/*<Button title='跳转详情页' onPress={() => {*/}
        {/*Navigator.navigateToView('Detail');*/}
        {/*}}/>*/}

        <Button title='更换主题' onPress={() => {
          console.log(this.props.theme);
          this.props.updateTheme(this.props.theme === '#1890ff' ? '#a67' : '#1890ff');
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

const mapStateToProps = ({ colors }) => ({
  theme: colors.theme,
});

const mapDispatchToProps = dispatch => ({
  updateTheme(theme) {
    dispatch(updateTheme(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularView);
