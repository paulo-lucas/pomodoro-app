import React, { useReducer } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Styles from './styles';
import backPng from '../../assets/back.png';
import PresetsVisualizer from '../../components/PresetsVisualizer';

import { useCurrentContext } from '../../contexts/current';

function presetsReducer(state, action) {
  const newState = { ...state };
  newState[action.target] = action.value;
  return newState;
}

export default function SettingsPage({ navigation }) {
  const { state, dispatch } = useCurrentContext();

  const presetsInitialState = {
    breakMin: Math.floor(state.maxBreakTime / 60),
    breakSec: state.maxBreakTime % 60,
    workMin: Math.floor(state.maxWorkTime / 60),
    workSec: state.maxWorkTime % 60,
    series: state.maxSeries
  }

  const [presetsState, presetsDispatch] = useReducer(presetsReducer, presetsInitialState);

  function handleSaveButton() {
    dispatch({
      type: 'change_presets',
      maxBreakTime: (presetsState.breakMin * 60) + presetsState.breakSec,
      maxWorkTime: (presetsState.workMin * 60) + presetsState.workSec,
      maxSeries: presetsState.series
    });
    dispatch({ type: 'reset' });

    console.log(state);
    navigation.navigate('Home');
  }

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.presetsContainer}>
        <PresetsVisualizer presets={presetsState} />
        <Text style={Styles.presetsTitle}>Work for:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.workMin}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'workMin', value: itemValue })} >
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>minutes</Text>
          </View>

          <View style={Styles.presetsCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.workSec}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'workSec', value: itemValue })} >
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>seconds</Text>
          </View>
        </View>

        <Text style={Styles.presetsTitle}>Take a break for:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.breakMin}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'breakMin', value: itemValue })} >
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>minutes</Text>
          </View>

          <View style={Styles.presetsCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.breakSec}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'breakSec', value: itemValue })} >
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>seconds</Text>
          </View>
        </View>

        <Text style={Styles.presetsTitle}>Repeat:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.series}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'series', value: itemValue })} >
              {Array(10).fill().map((element, index) => <Picker.Item key={index} label={String(index + 1)} value={index + 1} />)}
            </Picker>
            <Text style={Styles.presetsText}>times</Text>
          </View>
        </View>

        <View style={Styles.optionsContainer}>
          <TouchableOpacity style={Styles.saveButton} onPress={handleSaveButton}>
            <Text style={Styles.saveText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.discardButton} onPress={() => navigation.navigate('Home')}>
            <Image style={Styles.discardImage} source={backPng} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView >
  );
}