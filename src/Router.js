import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './config/colorPallete.json';
import SettingsButton from './components/SettingsButton';

import Home from './pages/Home';
import TimeSelector from './pages/TimeSelector';

const { Navigator, Screen } = createStackNavigator();

export default function Router() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Pomodoro",
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.others[2],
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: SettingsButton
        }}
      />

      <Screen
        name="TimeSelector"
        component={TimeSelector}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}
