import React, { PureComponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { fromJS } from 'immutable';

import Navigator from 'router/navigator';
import { updateTheme } from 'store/colors';
import { fetchColleges } from 'request/apis';

class ListView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colleges: fromJS([]),
    };
  }

  fetchColleges = async () => {
    try {
      let response = await fetchColleges();
      console.log(response);
      const colleges = response.code === 200 ? response.data : [];
      this.setState(state => ({ colleges: fromJS(colleges) }));
    } catch (e) {
      console.log(e);
    }
  };

  render(): React.ReactNode {
    return (
      <View style={styles.container}>

        <Button title='更换主题' onPress={() => {
          console.log(this.props.theme);
          this.props.updateTheme(this.props.theme === '#1890ff' ? '#a67' : '#1890ff');
        }}/>

        <Button title='跳转详情页' onPress={() => {
          const { tabLabel } = this.props;
          Navigator.navigateToView('Detail', { name: tabLabel });
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
