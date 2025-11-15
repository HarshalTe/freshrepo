import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const su = createAsyncThunk('su', async ({ getid, getuserdata }) => {
    try {
        const res = await fetch(`https://67ab452f5853dfff53d6c917.mockapi.io/app/user/${getid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(getuserdata)
        })
        const final = await res.json();
        return final;
    } catch (error) {

    }
})
export const deletedata = createAsyncThunk('deletedata', async (id) => {
    try {
        const res = await fetch(`https://67ab452f5853dfff53d6c917.mockapi.io/app/user/${id}`, {
            method: 'DELETE'
        });
        const result = await res.json();
        return result;
    } catch (error) {
        throw error;
    }
})

export const show = createAsyncThunk('show', async () => {
    try {
        const res = await fetch('https://67ab452f5853dfff53d6c917.mockapi.io/app/user');
        const final = await res.json();
        return final;
    } catch (error) {
        throw error;
    }
});

export const create = createAsyncThunk('create', async (userdata) => {
    try {
        const res = await fetch('https://67ab452f5853dfff53d6c917.mockapi.io/app/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata)

        })
        const final = await res.json();
        return final;
    } catch (error) {
        throw error
    }

})

const Newstartslice = createSlice({
    name: "crud2",
    initialState: {
        loading: false,
        userlistdata: [],
        error: null

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(show.pending, (state) => {
                state.loading = true;
            })
            .addCase(show.fulfilled, (state, action) => {
                state.loading = false;
                state.userlistdata = action.payload;
            })
            .addCase(show.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(create.pending, (state) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.loading = false;
                state.userlistdata.push(action.payload);
            })
            .addCase(create.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deletedata.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletedata.fulfilled, (state, action) => {
                state.loading = false;
                state.userlistdata = state.userlistdata.filter((ech) => {
                    const d = ech.id !== action.payload.id;
                    return d;

                })
            })
            .addCase(deletedata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(su.pending,(state,action)=>{
                 state.loading = true; 
            })
            .addCase(su.fulfilled, (state, action) => {
                state.loading = false;

                // 🟢 Replace only the updated user
                state.userlistdata = state.userlistdata.map((ech) =>
                    ech.id === action.payload.id ? action.payload : ech
                );
            })
            .addCase(su.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    },
});

export default Newstartslice.reducer;
