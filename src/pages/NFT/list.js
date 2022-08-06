import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto NFT Detail" />;

const NFTListPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NFTList</Text>
      <RaisedButton onPress={() => navigation.navigate('NFT-List')}></RaisedButton>
    </View>
  );
}

export default NFTListPage