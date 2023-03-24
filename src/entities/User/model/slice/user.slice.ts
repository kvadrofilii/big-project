import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: { id: '', username: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.authData.id = '1';
    },
    decrement: (state) => {
      state.authData.id = '1';
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
