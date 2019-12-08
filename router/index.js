import { createStackNavigator } from 'react-navigation-stack';
import IndexView from '../views/Index';

export const IndexStackNavigator = createStackNavigator({
  Index: {
    screen: IndexView,
    navigationOptions: {
      title: '首页',
    },
  },
}, {
  defaultNavigationOptions: {},
});

