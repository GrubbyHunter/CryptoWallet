import React from 'react';
import { Text, View } from 'react-native'
// import
const NFTPage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NFTPage</Text>
    </View>
  );
}
ImagePicker.openPicker({
  multiple: true
}).then(images => {
  console.log(images);
});
export default NFTPage