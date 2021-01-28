import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../../config/colorPallete.json';
import playButtonPng from '../../assets/play-button.png';
import pauseButtonPng from '../../assets/pause-button.png';
import Styles from './styles';

import { useCurrentContext } from '../../contexts/current';

function secondsToTimeFormat(seconds) {
  const mins = seconds / 60 < 10
    ? '0' + Math.floor(seconds / 60)
    : Math.floor(seconds / 60);
  const secs = seconds % 60 < 10
    ? '0' + seconds % 60
    : seconds % 60;

  return `${mins}:${secs}`
}

export default function Timer() {
  const { state, dispatch } = useCurrentContext();

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'a_second_has_passed' })
    }, 1000);
  }, []);

  return (
    <View style={Styles.container}>
      <Progress.Circle
        style={Styles.progress}
        progress={(state.isBreak ? state.breakTime : state.workTime)
          / (state.isBreak ? state.maxBreakTime : state.maxWorkTime)}
        size={Dimensions.get('window').width * 0.7}
        indeterminateAnimationDuration={1200}
        thickness={Dimensions.get('window').width * 0.05}
        strokeCap="round"
        color={state.isBreak ? colors.others[1] : colors.others[3]}
        borderWidth={0}
      />

      <View style={Styles.infoContainer}>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => dispatch({ type: state.isFinished ? 'reset' : 'toggle_pause' })}
        >
          <Image
            source={state.isFinished || state.isPaused ? playButtonPng : pauseButtonPng}
            style={Styles.pauseButton}
          />

          <Text style={Styles.message}>
            {
              state.workTime == state.maxWorkTime
                && state.breakTime == state.maxBreakTime
                && state.series == state.maxSeries
                && state.isPaused
                ? "Start Pomodoro"
                : state.isFinished
                  ? "Finished"
                  : state.isPaused
                    ? "Paused"
                    : state.isBreak
                      ? "Take a break"
                      : "Time to work"
            }
          </Text>
        </TouchableOpacity>
        <Text style={Styles.counter}>{secondsToTimeFormat(state.isBreak ? state.breakTime : state.workTime)}</Text>
        <Text style={Styles.series}>{state.series}/{state.maxSeries}</Text>
      </View>
    </View>
  )
}