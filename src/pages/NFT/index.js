import { Text, View } from 'react-native'
import React from 'react';

const NFTPage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NFTPage1</Text>
    </View>
  );
}
ImagePicker.openPicker({
  multiple: true
}).then(images => {
  console.log(images);
});
export default NFTPage