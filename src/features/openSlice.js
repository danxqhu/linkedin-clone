import { createSlice } from '@reduxjs/toolkit';

export const openSlice = createSlice({
  name: 'open',
  initialState: {
    open: false,
  },
  reducers: {
    handleToggle: (state, action) => {
      console.log('action:', action);
      state.open = action.payload;
    },
    handleClose: state => {
      state.open = false;
    },
  },
});

export const { handleToggle, handleClose } = openSlice.actions;

// Selectors
export const selectOpen = state => state.open.open;

export default openSlice.reducer;
