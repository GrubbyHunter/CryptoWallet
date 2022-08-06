import List from "./list"
import Detail from "./detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from '@rneui/themed'
import React from 'react'

const WalletStack = createNativeStackNavigator()

const WalletPage = ({ navigation }) => {
  // default show first screen
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="Wallet-List" component={List} />
      <WalletStack.Screen name="Wallet-Details" component={Detail} />
    </WalletStack.Navigator>
  )
}

export default WalletPage