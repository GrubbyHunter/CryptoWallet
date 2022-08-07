import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto News Detail" />;

const NewsIndexPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewsIndex</Text>
      <RaisedButton onPress={() => navigation.navigate("NewsDetail")}></RaisedButton>
    </View >
  );
}

export default NewsIndexPage