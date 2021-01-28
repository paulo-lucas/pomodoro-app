import React, { createContext, useReducer, useContext } from "react";

export const CurrentContext = createContext();

const initialState = {
  workTime: 25,
  maxWorkTime: 25,
  breakTime: 5,
  maxBreakTime: 5,
  series: 5,
  maxSeries: 5,
  isBreak: false,
  isPaused: true,
  isFinished: false
};

const reducerActions = {
  a_second_is_gone: (state, action) => {
    const current = state.isBreak ? state.breakTime : state.workTime;

    if (state.isPaused || state.isFinished)
      return { ...state };

    if (current === 0)
      return {
        ...state,
        series: state.isBreak
          ? state.series - 1
          : state.series,
        isFinished: state.series === 1,
        isBreak: !state.isBreak,
        workTime: state.isBreak && state.series !== 1
          ? state.maxWorkTime
          : state.workTime,
        breakTime: !state.isBreak && state.series !== 1
          ? state.maxBreakTime
          : state.workTime
      };

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
  toggle_pause: (state, action) => {
    return {
      ...state,
      pause: !state.pause
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

function CurrentConsumer() {
  return <CurrentContext.Consumer {...props} />;
}

function useCurrentContext() {
  return useContext(CurrentContext);
}

export { CurrentProvider, CurrentConsumer, useCurrentContext };