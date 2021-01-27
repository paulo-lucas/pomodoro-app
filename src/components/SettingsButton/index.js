import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from './styles';
import settingsIcon from '../../assets/settings.png';

export default function SettingsButton() {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      style={Styles.button}
      onPress={() => navigator.navigate('TimeSelector')}
    >
      <Image style={Styles.icon} source={settingsIcon} />
    </TouchableOpacity>
  )
}