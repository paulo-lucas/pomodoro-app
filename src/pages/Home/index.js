import React from 'react';
import { View } from 'react-native';

import Styles from './styles';
import Timer from '../../components/Timer';
import FloatingButton from '../../components/FloatingButton';

export default function Home({ navigation }) {

  return (
    <View style={Styles.container}>
      <Timer />
      <FloatingButton />
    </View>
  );
}