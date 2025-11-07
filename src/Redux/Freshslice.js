import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userdata1 = createAsyncThunk("showdata", async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json(); 
    return result;
  } catch (error) {
    console.warn(error + "  result");
    throw error;
  }
});

const Freshslice = createSlice({
  name: "user",
  initialState: {
    userdata: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userdata1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userdata1.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userdata = action.payload;
      })
      .addCase(userdata1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default Freshslice.reducer;
