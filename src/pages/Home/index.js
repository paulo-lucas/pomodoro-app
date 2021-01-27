import React from 'react';
import { View, Text } from 'react-native';

import Styles from './styles';
import Timer from '../../components/Timer';

export default function Home({ navigation }) {
  return (
    <View style={Styles.container}>
      <Timer />
      <Text>Reset Timer</Text>
    </View>
  );
}