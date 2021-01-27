import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import colors from '../../config/colorPallete.json';
import Styles from './styles';

export default function Timer() {
  const onBreak = true;

  return (
    <ProgressCircle
      percent={60}
      radius={120}
      borderWidth={20}
      color={onBreak ? colors.others[1] : colors.others[3]}
      shadowColor={colors.others[0]}
      bgColor="#fff"
      outerCircleStyle={Styles.timer}
      containerStyle={Styles.circleContainer}
    >
      <Text style={{ fontSize: 18 }}>{'30%'}</Text>
    </ProgressCircle>
  )
}