import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // console.log('action:', action);
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: state => {
      state.user = null;
      localStorage.setItem('user', JSON.stringify(null));
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = state => state.user.user;
// export const selectUser = state => state.user;

export default userSlice.reducer;
