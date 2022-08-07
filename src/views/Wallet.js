import List from "../pages/Wallet/list"
import Detail from "../pages/Wallet/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const WalletStack = createNativeStackNavigator()

const WalletView = ({ navigation, route }) => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen options={{ headerShown: false }}
        name="WalletList" component={List} />
      <WalletStack.Group>
        <WalletStack.Screen name="WalletDetails" component={Detail} />
      </WalletStack.Group>
    </WalletStack.Navigator >
  )
}

export default WalletView