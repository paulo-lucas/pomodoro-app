import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Configs
import colors from './config/colorPallete.json';

// Pages
import Home from './pages/Home';
import TimeSelector from './pages/TimeSelector';

// Contexts
import { CurrentProvider } from './contexts/current';

const { Navigator, Screen } = createStackNavigator();

export default function Router() {

  return (
    <CurrentProvider>
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
            }
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
    </CurrentProvider>
  )
}
