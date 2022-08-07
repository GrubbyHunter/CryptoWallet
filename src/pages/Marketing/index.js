import { Text, View } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
const RaisedButton = (props) => <Button raised {...props} title="goto Marketing Detail" />;

const MarketingIndexPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MarketingIndex</Text>
      <RaisedButton onPress={() => navigation.navigate('MarketingDetail')}></RaisedButton>
    </View>
  );
}

export default MarketingIndexPage