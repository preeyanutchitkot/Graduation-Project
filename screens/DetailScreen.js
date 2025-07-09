import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>หน้ารายละเอียด (Detail)</Text>
      <Button
        title="ย้อนกลับ"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
