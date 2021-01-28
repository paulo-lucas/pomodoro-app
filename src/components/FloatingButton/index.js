import React from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { useNavigation } from '@react-navigation/native';

import colors from '../../config/colorPallete.json';
import menuPng from '../../assets/menu.png';
import resetPng from '../../assets/reset.png';
import settingsPng from '../../assets/settings.png';

import { useCurrentContext } from '../../contexts/current';

const buttons = [
  {
    text: "Reset",
    buttonSize: 45,
    icon: resetPng,
    name: "reset_timer",
    color: colors.others[3],
    position: 2
  },
  {
    text: "Settings",
    buttonSize: 45,
    icon: settingsPng,
    name: "open_settings",
    color: colors.others[0],
    position: 1
  },
];

const buttonActions = {
  reset_timer: ({ dispatch }) => {
    dispatch({ type: 'reset' });
  },
  open_settings: ({ navigation }) => {
    navigation.navigate('TimeSelector');
  }
}

export default function FloatingButton() {
  const { dispatch } = useCurrentContext();
  const navigation = useNavigation();

  return (
    <FloatingAction
      actions={buttons}
      floatingIcon={menuPng}
      iconWidth={20}
      color={colors.secondary}
      onPressItem={name => buttonActions[name]({ dispatch, navigation })}
    />
  )
}