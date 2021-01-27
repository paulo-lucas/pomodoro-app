import React from 'react';
import { View, Text, Button } from 'react-native';

import Styles from './styles';

export default function TimeSelector({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>MODAL</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}