import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto Wallet Detail" />;

const WalletListPage = ({ navigation }) => {
  // navigation.navigate('My-Detail', {
  //   screen: 'My-Details'
  // });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WalletList</Text>
      <RaisedButton onPress={() => {
        // navigation.navigate('My', {
        //   screen: 'My-Details'
        // });
        navigation.navigate('Wallet-Details');
      }}></RaisedButton>
    </View>
  );
}

export default WalletListPage