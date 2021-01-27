import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import colors from './config/colorPallete.json';
import Router from './Router';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Router />
    </NavigationContainer>
  );
}