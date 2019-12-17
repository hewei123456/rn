import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { BottomTabBar, createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';

import { connect } from 'react-redux';

import PopularView from './Popular';

class HomeView extends PureComponent {
  constructor(props) {
    super(props);
    this.tabs = ['Java', 'Android', 'IOS',
      'React', 'React Native', 'PHP', 'Javascript'];
  }

  renderTab = () => {
    let tabs = {};
    this.tabs.forEach((tab, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularView {...props} tabLabel={tab}/>,
        navigationOptions: {
          tabBarLabel: tab,
        },
      };
    });
    return tabs;
  };


  render(): React.ReactNode {
    const tabs = this.renderTab();
    const TopTab = createAppContainer(createMaterialTopTabNavigator(tabs, {
      tabBarComponent: connect(mapStateToProps)(TabBarComponent),
    }));
    return (
      <View style={styles.container}>
        <TopTab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});

class TabBarComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: this.props.theme,
    };
    return <MaterialTopTabBar
      {...this.props}
      tabStyle={styles.tabStyle}
      indicatorStyle={styles.indicatorStyle}
      scrollEnabled={true}
      upperCaseLabel={false}
      style={style}
      labelStyle={styles.labelStyle}
    />;
  }
}

const mapStateToProps = ({ colors }) => ({
  theme: colors.theme,
});

export default HomeView;
