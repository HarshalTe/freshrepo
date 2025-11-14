import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const remove = createAsyncThunk('remove', async (id) => {
    try {
        const res = await fetch(`https://67ab452f5853dfff53d6c917.mockapi.io/app/user/${id}`, {
            method: "DELETE",
        });
        const result = await res.json();
        return result;
    } catch (error) {
        throw error;
    }
});

export const updatedata1 = createAsyncThunk("update", async ({ info, getid }) => {
    try {
        const updatedata = await fetch(`https://67ab452f5853dfff53d6c917.mockapi.io/app/user/${getid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        });
        const res = await updatedata.json();
        return res;
    } catch (error) {
        throw error;
    }
});

export const postdata = createAsyncThunk("postdata", async (userdata) => {
    try {
        const response = await fetch('https://67ab452f5853dfff53d6c917.mockapi.io/app/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
});

export const showdata = createAsyncThunk("showdata", async () => {
    try {
        const res = await fetch('https://67ab452f5853dfff53d6c917.mockapi.io/app/user');
        const final = await res.json();
        return final;
    } catch (error) {
        throw error;
    }
});

const Start1slice = createSlice({
    name: "ss",
    initialState: {
        loading: false,
        userdata: [],
        err: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(showdata.pending, (state) => {
                state.loading = true;
            })
            .addCase(showdata.fulfilled, (state, action) => {
                state.loading = false;
                state.userdata = action.payload;
            })
            .addCase(showdata.rejected, (state, action) => {
                state.err = action.payload;
                state.loading = false;
            })
            .addCase(postdata.pending, (state) => {
                state.loading = true;
            })
            .addCase(postdata.fulfilled, (state, action) => {
                state.loading = false;
                state.userdata.push(action.payload);
            })
            .addCase(postdata.rejected, (state, action) => {
                state.err = action.payload;
            })
            .addCase(remove.pending, (state) => {
                state.loading = true;
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.loading = false;
                state.userdata = state.userdata.filter(
                    (user) => user.id !== action.payload.id
                );
            })
            .addCase(remove.rejected, (state, action) => {
                state.loading = false;
                state.err = action.error.message;
            })
            .addCase(updatedata1.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatedata1.fulfilled, (state, action) => {
                state.loading = false;
                state.userdata = state.userdata.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                );
            })
            .addCase(updatedata1.rejected, (state, action) => {
                state.loading = false;
                state.err = action.error.message;
            })

    },
});

export default Start1slice.reducer;
