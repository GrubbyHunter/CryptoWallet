import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto Marketing Detail" />;

const MarketingListPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MarketingList</Text>
      <RaisedButton onPress={() => navigation.navigate('Marketing-Details')}></RaisedButton>
    </View>
  );
}

export default MarketingListPage