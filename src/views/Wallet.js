import List from "../pages/Wallet/list"
import Detail from "../pages/Wallet/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const WalletStack = createNativeStackNavigator()

const WalletView = () => {
  // default show first screen
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="Wallet-List" component={List} />
      <WalletStack.Screen name="Wallet-Details" component={Detail} />
    </WalletStack.Navigator>
  )
}

export default WalletView