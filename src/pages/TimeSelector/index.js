import React from 'react';
import { View, Text, Button } from 'react-native';

import Styles from './styles';

import { useCurrentContext } from '../../contexts/current';

export default function TimeSelector({ navigation }) {
  const { state, dispatch } = useCurrentContext();

  return (
    <View style={Styles.container}>
      <Text>Presets</Text>
      <Text>{state.workTime}</Text>
      <Button title="Add 1 second" onPress={() => {}} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}