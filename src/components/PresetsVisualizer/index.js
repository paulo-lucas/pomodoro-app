import React from 'react';
import { View, Text } from 'react-native';

import Styles from './styles';

function secondsToTimeFormat(seconds) {
  const mins = seconds / 60 < 10
    ? '0' + Math.floor(seconds / 60)
    : Math.floor(seconds / 60);
  const secs = seconds % 60 < 10
    ? '0' + seconds % 60
    : seconds % 60;

  return `${mins}:${secs}`
}

export default function PresetsVisualizer({ presets }) {
  const { breakMin, breakSec, workMin, workSec, series } = presets;

  // Minutes + Seconds => Just Seconds
  const breakTime = (breakMin * 60) + breakSec;
  const workTime = (workMin * 60) + workSec;

  return (
    <>
      <Text style={Styles.title}>Stats</Text>
      <View style={Styles.barContainer}>
        {/* Width recebe a porcentagem de tempo gasto em Work ou Break */}
        <View style={[Styles.workBar, { width: (workTime / (workTime + breakTime) * 100) + '%' }]} />
        <View style={[Styles.breakBar, { width: (breakTime / (workTime + breakTime) * 100) + '%' }]} />
      </View>

      <View style={Styles.info}>
        <View>
          {/* O workTime é multiplicado pelo numero de séries
            para retornar o tempo total que será gasto em work */}
          <Text style={Styles.infoWork}>Total work</Text>
          <Text style={Styles.infoWork}>{secondsToTimeFormat(workTime * series)}</Text>
        </View>

        <View>
          {/* O breakTime é multiplicado pelo numero de séries
            para retornar o tempo total que será gasto em break */}
          <Text style={Styles.infoInterval}>Total interval</Text>
          <Text style={Styles.infoInterval}>{secondsToTimeFormat(breakTime * series)}</Text>
        </View>
      </View>
    </>
  )
}