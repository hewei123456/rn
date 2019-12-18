import React, { PureComponent } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

var photoOptions = {
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class MineView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: '',
    };
  }

  cameraAction = () => {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log(response);
      if (response.didCancel) {
        return;
      }
      this.setState({
        imgURL: response.uri,
      });
    });
  };

  render(): React.ReactNode {
    const source = { uri: this.state.imgURL }, style = { width: 200, height: 200 };
    return (
      <View>
        <Image source={source}
               style={style}/>
        <Button title="拍照" onPress={this.cameraAction}/>
      </View>
    );
  }
};
