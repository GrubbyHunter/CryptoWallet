import WalletIndex from "../pages/Wallet"
import WalletDetail from "../pages/Wallet/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const WalletStack = createNativeStackNavigator()

const WalletView = ({ navigation, route }) => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen options={{ headerShown: false }}
        name="WalletIndex"  >
        {props => <WalletIndex  {...props} />}
      </WalletStack.Screen>
      <WalletStack.Group>
        <WalletStack.Screen name="WalletDetail" >
          {props => <WalletDetail  {...props} />}
        </WalletStack.Screen>
      </WalletStack.Group>
    </WalletStack.Navigator >
  )
}

export default WalletView