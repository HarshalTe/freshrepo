import { createSlice } from "@reduxjs/toolkit";

const Form1slice = createSlice({
    name:"newuserdata",
    initialState:{
        persons:[]
    },
    reducers:{
        adduser:(state,action)=>{
            state.persons.push(action.payload);
        },
  save:(state,action)=>{
   state.persons = state.persons.map((pe,pi) =>
      pi === action.payload.id ? action.payload : pe
   );
}

    }
})
export const {adduser,save} = Form1slice.actions;
export default Form1slice.reducer;