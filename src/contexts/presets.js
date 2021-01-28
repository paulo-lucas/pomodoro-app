import React, { createContext, useReducer, useContext } from "react";

export const PresetsContext = createContext();

const initialState = {
  workTime: 25,
  breakTime: 5,
  series: 5
};

const reducerActions = {
  change_work_time: (state, action) => {
    return {
      ...state,
      workTime: action.value
    }
  },
  change_break_time: (state, action) => {
    return {
      ...state,
      breakTime: action.value
    }
  },
  change_series: (state, action) => {
    return {
      ...state,
      series: action.value
    }
  }
};

const presetsReducer = (state, action) => {
  const func = reducerActions[action.type];

  if (func)
    return func(state, action);


  console.log('[WARNING] Action without reducer:', action);
  return state;
};

function PresetsProvider(props) {
  const [state, dispatch] = useReducer(presetsReducer, initialState);

  const presetsData = { state, dispatch };

  return <PresetsContext.Provider value={presetsData} {...props} />;
}

function PresetsConsumer() {
  return <PresetsContext.Consumer {...props} />;
}

function usePresetsContext() {
  return useContext(PresetsContext);
}

export { PresetsProvider, PresetsConsumer, usePresetsContext };