import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    greetings: [],
    isLoading: false,
  };

  export const getGreetings = createAsyncThunk('greeting/getGritings', async (_, thunkAPI) => {
    try {
      const response = await fetch("http://[::1]:3000/random_greeting");
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {   
    },
    extraReducers: (builder) => {
        builder
        .addCase(getGreetings.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(getGreetings.fulfilled, (state, action) => {
            return {
              ...state,
              greetings: action.payload,
              isLoading: false,
            };
          })
        .addCase(getGreetings.rejected, (state) => ({
          ...state,
          isLoading: false,
        }));
    }

})

export default greetingSlice.reducer;