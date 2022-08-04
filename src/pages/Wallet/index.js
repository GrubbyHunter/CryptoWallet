import { Text, View } from 'react-native'

import { Button } from '@rneui/themed'
import React from 'react'

const RaisedButton = (props) => <Button raised {...props} title="确认" />;
const WalletPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WalletDetail</Text>
      <RaisedButton nPress={() => navigation.navigate('WalletDetail')}></RaisedButton>
    </View>
  );
}

export default WalletPage