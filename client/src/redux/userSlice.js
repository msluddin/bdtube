import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  signupLoading: false,
  signupSuccess: null,
  signupError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },

    signupLoading: (state) => {
      state.isFetching = true;
    },
    signupSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    signupError: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupLoading,
  signupSuccess,
  signupError,
} = userSlice.actions;

export default userSlice.reducer;
