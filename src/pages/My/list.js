import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto My Detail" />;

const MyListPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyList</Text>
      <RaisedButton onPress={() => navigation.navigate('My-List')}></RaisedButton>
    </View>
  );
}

export default MyListPage