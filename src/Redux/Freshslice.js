import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userdata1 = createAsyncThunk("showdata", async () => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = data.json();
        return result;
    }
    catch (error) {
        console.warn(error + "  result")
    }
})

const Freshslice = createSlice({
    name: "user",
    initialState: {
        userdata: [],
        error: null,
        lodding: false,
    },
    extraReducers: (builder) => {
        builder.addCase(userdata.pending, (state) => {
            state.lodding = true;
            state.error = null;
        },
            builder.addCase(userdata.fulfilled, (state, action) => {
                state.lodding = false;
                state.error = null;
                state.userdata = action.payload;
            },
                builder.addCase(userdata.rejected, (state, action) => {
                    state.error = action.payload;
                })
            )
        )
    }
})
export default Freshslice.reducer;