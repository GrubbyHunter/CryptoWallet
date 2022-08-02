/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native'
// 全局主题设置
import { ThemeProvider, createTheme } from "@rneui/themed"

import Marketing from "../pages/Marketing"
import My from "../pages/My"
import NFT from "../pages/NFT"
import News from "../pages/News"
import React from 'react'
import Wallet from "../pages/Wallet"

const theme = createTheme({
  lightColors: {
    primary: '#0052D9',
  },
  darkColors: {
    primary: '#000',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wallet></Wallet>
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
