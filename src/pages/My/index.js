import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto My Detail" />;

const MyIndexPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyIndex</Text>
      <RaisedButton onPress={() => navigation.navigate('MyDetail')}></RaisedButton>
    </View>
  );
}

export default MyIndexPage