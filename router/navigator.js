export default class Navigator {
  static navigateToView(view, params) {
    const navigation = Navigator.navigation;
    if (!navigation) {
      console.log('Navigator.navigation can not be null');
    } else {
      navigation.navigate(view, { ...params });
    }
  }

  static switchToIndex({ navigation }) {
    navigation.navigate('Index');
  }
}
