import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    searchOpen: false,
    menuOpen: false,
  },
  reducers: {
    toggleSearch: (state) => {
      state.searchOpen = !state.searchOpen;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleSearch, toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
