import React from 'react';
import { Text, View, Button } from 'react-native'

const MyPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyPage</Text>
      <Button
        title="Go to My... again"
        onPress={() => navigation.push('My')}
      />
    </View>
  );
}

export default MyPage