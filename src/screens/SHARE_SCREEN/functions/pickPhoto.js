import ImagePicker from 'react-native-image-crop-picker';

export const pickPhoto = (setPhotoBackground) => {
  ImagePicker.openPicker({
    width: 750,
    height: 1000,
    cropping: true,
  }).then(photo => {
    setPhotoBackground(photo);
  });
};
