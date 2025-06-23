import { createSlice } from '@reduxjs/toolkit';

const debugSlice = createSlice({
  name: 'debug',
  initialState: {
    isEnabled: false,
    activeComponents: [], // Track which components to debug
    logLevel: 'all', // 'all', 'error', 'warn', 'info'
  },
  reducers: {
    toggleDebug: (state) => {
      state.isEnabled = !state.isEnabled;
    },
    setDebugEnabled: (state, action) => {
      state.isEnabled = action.payload;
    },
    addComponentToDebug: (state, action) => {
      if (!state.activeComponents.includes(action.payload)) {
        state.activeComponents.push(action.payload);
      }
    },
    removeComponentFromDebug: (state, action) => {
      state.activeComponents = state.activeComponents.filter(
        component => component !== action.payload
      );
    },
    clearActiveComponents: (state) => {
      state.activeComponents = [];
    },
    setLogLevel: (state, action) => {
      state.logLevel = action.payload;
    }
  }
});

export const {
  toggleDebug,
  setDebugEnabled,
  addComponentToDebug,
  removeComponentFromDebug,
  clearActiveComponents,
  setLogLevel
} = debugSlice.actions;

export default debugSlice.reducer;