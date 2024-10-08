// src/store/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron işlem: Kullanıcı kaydını API'ye gönder
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/signup', { name, email, password });
      return response.data; // API'den gelen veri
    } catch (error) {
      return rejectWithValue(error.response.data); // Hata durumunda veri
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Kullanıcı verisini sakla
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Hata bilgisini sakla
      });
  },
});

export default userSlice.reducer;
