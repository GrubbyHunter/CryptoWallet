import List from "../pages/NFT/list"
import Detail from "../pages/NFT/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const NFTStack = createNativeStackNavigator()

const NFTView = () => {
  // default show first screen
  return (
    <NFTStack.Navigator>
      <NFTStack.Screen name="NFTList" component={List} options={{ headerShown: false }} />
      <NFTStack.Group>
        <NFTStack.Screen name="NFTDetails" component={Detail} />
      </NFTStack.Group>
    </NFTStack.Navigator>
  )
}

export default NFTView