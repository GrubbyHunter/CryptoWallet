import React from 'react';
import { Text, View, Button } from 'react-native'

const WalletPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WalletPage</Text>
      <Button
        title="Go to My"
        onPress={() => navigation.navigate('My')}></Button>
    </View>
  );
}

export default WalletPage