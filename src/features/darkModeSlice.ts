import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: true, // Default to dark mode
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
