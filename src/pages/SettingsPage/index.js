import React, { useReducer } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Styles from './styles';
import backPng from '../../assets/back.png';
import PresetsVisualizer from '../../components/PresetsVisualizer';

import { useCurrentContext } from '../../contexts/current';

// Reducer local apenas atualiza a variável target
function presetsReducer(state, action) {
  const newState = { ...state };
  newState[action.target] = action.value;
  return newState;
}

export default function SettingsPage({ navigation }) {
  const { state, dispatch } = useCurrentContext();

  const presetsInitialState = {
    breakMin: Math.floor(state.maxBreakTime / 60), // Seconds => Minutes & Seconds
    breakSec: state.maxBreakTime % 60,
    workMin: Math.floor(state.maxWorkTime / 60), // Seconds => Minutes & Seconds
    workSec: state.maxWorkTime % 60,
    series: state.maxSeries
  }

  const [presetsState, presetsDispatch] = useReducer(presetsReducer, presetsInitialState);

  // Local reducer state => CurrentContext reducer state
  function handleSaveButton() {
    dispatch({
      type: 'change_presets',
      maxBreakTime: (presetsState.breakMin * 60) + presetsState.breakSec, // Minutes + Seconds => Just seconds
      maxWorkTime: (presetsState.workMin * 60) + presetsState.workSec, // Minutes + Seconds => Just seconds
      maxSeries: presetsState.series
    });
    dispatch({ type: 'reset' });

    navigation.navigate('Home');
  }

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.presetsContainer}>

        {/** Stats bar */}
        <PresetsVisualizer presets={presetsState} />

        {/** Work settings */}
        <Text style={Styles.presetsTitle}>Work for:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.workMin}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'workMin', value: itemValue })} >
              {/** Gera 60 itens (0 a 59) para selecionar os minutos */}
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
              {/** Gera 60 itens (0 a 59) para selecionar os segundos */}
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>seconds</Text>
          </View>
        </View>

        {/** Break settings */}
        <Text style={Styles.presetsTitle}>Take a break for:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.breakMin}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'breakMin', value: itemValue })} >
              {/** Gera 60 itens (0 a 59) para selecionar os minutos */}
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
              {/** Gera 60 itens (0 a 59) para selecionar os segundos */}
              {Array(60).fill().map((element, index) => <Picker.Item key={index} label={String(index)} value={index} />)}
            </Picker>
            <Text style={Styles.presetsText}>seconds</Text>
          </View>
        </View>

        {/** Series settings */}
        <Text style={Styles.presetsTitle}>Repeat:</Text>
        <View style={Styles.presetsRow}>
          <View style={Styles.presetsLeftCell}>
            <Picker
              mode="dropdown"
              dropdownIconColor="#ffffff"
              selectedValue={presetsState.series}
              style={Styles.picker}
              onValueChange={(itemValue, itemIndex) => presetsDispatch({ target: 'series', value: itemValue })} >
              {/** Gera 10 itens (1 a 10) para selecionar o número de repetições/séries */}
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