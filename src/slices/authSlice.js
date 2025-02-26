import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: (() => {
    try {
      return localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null;
    } catch (error) {
      console.error('Error reading user info from localStorage:', error);
      return null;
    }
  })()
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
