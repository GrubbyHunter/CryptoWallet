/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native'
// 全局主题
import { ThemeProvider, createTheme } from "@rneui/themed"

import Marketing from "./views/Marketing"
import My from "./views/My"
import NFT from "./views/NFT"
import { NavigationContainer } from '@react-navigation/native'
import News from "./views/News"
import React from 'react'
import Wallet from "./views/Wallet"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()
const theme = createTheme({
  colors: {
    primary: '#0052D9'
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="Marketing" component={Marketing} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
