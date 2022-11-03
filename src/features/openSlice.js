import { createSlice } from '@reduxjs/toolkit';

export const openSlice = createSlice({
  name: 'open',
  initialState: {
    open: false,
  },
  reducers: {
    handleToggle: (state, action) => {
      state.open = action.payload.open;
    },
    handleClose: state => {
      state.open = false;
    },
  },
});

export const { handleToggle, handleClose } = openSlice.actions;

// Selectors
export const selectOpen = state => state.open.open;
// export const selectOpen = state => state.open;

export default openSlice.reducer;
