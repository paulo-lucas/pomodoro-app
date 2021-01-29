import React, { createContext, useReducer, useContext } from "react";

export const CurrentContext = createContext();

const initialState = {
  workTime: 25,
  maxWorkTime: 25,
  breakTime: 5,
  maxBreakTime: 5,
  series: 3,
  maxSeries: 3,
  isBreak: false,
  isPaused: true,
  isFinished: false
};

const reducerActions = {
  a_second_has_passed: (state, action) => {
    const current = state.isBreak ? state.breakTime : state.workTime; // Contador atual

    if (state.isPaused || state.isFinished)
      return state;

    if (current === 0) {
      return {
        ...state,
        series: state.isBreak                           // Finaliza uma série caso: (Contador == 0 && isBreak == true)
          ? state.series - 1
          : state.series,
        isFinished: state.isBreak && state.series == 1, // Finaliza Pomodoro caso: (Contador == 0 && isBreak == true && Ultima série)
        isBreak: !state.isBreak,                        // Alterna isBreak caso tenha terminado o contador atual
        workTime: state.maxWorkTime,                    // Reseta workTime
        breakTime: state.maxBreakTime                   // Reseta breakTime
      };
    }

    // Passagem comum de 1 segundo
    return {
      ...state,
      workTime: !state.isBreak
        ? state.workTime - 1
        : state.workTime,
      breakTime: state.isBreak
        ? state.breakTime - 1
        : state.breakTime
    }
  },
  change_presets: (state, action) => {
    return {
      ...state,
      maxWorkTime: action.maxWorkTime,
      maxBreakTime: action.maxBreakTime,
      maxSeries: action.maxSeries,
    }
  },
  toggle_pause: (state, action) => {
    return {
      ...state,
      isPaused: !state.isPaused
    }
  },
  reset: (state, action) => {
    return {
      ...state,
      workTime: state.maxWorkTime,
      breakTime: state.maxBreakTime,
      series: state.maxSeries,
      isBreak: initialState.isBreak,
      isPaused: initialState.isPaused,
      isFinished: initialState.isFinished
    }
  }
};

// Recebe action.type e repassa para o reducer actions
const currentReducer = (state, action) => {
  const func = reducerActions[action.type];

  if (func)
    return func(state, action);

  console.log('[WARNING] Action without reducer:', action);
  return state;
};

function CurrentProvider(props) {
  const [state, dispatch] = useReducer(currentReducer, initialState);

  const currentData = { state, dispatch };

  return <CurrentContext.Provider value={currentData} {...props} />;
}

function useCurrentContext() {
  return useContext(CurrentContext);
}

export { CurrentProvider, useCurrentContext };