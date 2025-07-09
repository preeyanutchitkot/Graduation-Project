import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

export default function HomeScreen({ navigation }) {
  const openWebsite = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>หน้าหลัก (Home)</Text>
      <Button
        title="ไปหน้า Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={{ marginTop: 10 }} />
      <Button
        title="เปิดเว็บไซต์ Google"
        onPress={openWebsite}
      />
    </View>
  );
}
