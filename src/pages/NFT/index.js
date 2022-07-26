import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto NFT Detail" />;

const NFTIndexPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NFTIndex</Text>
      <RaisedButton onPress={() => navigation.navigate('NFTDetail')}></RaisedButton>
    </View>
  );
}

export default NFTIndexPage