import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto News Detail" />;

const NewsListPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewsList</Text>
      <RaisedButton onPress={() => navigation.navigate("NewsDetails")}></RaisedButton>
    </View >
  );
}

export default NewsListPage