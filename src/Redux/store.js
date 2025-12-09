import { configureStore } from "@reduxjs/toolkit";
import couterslice from "./counterslice";
import postslice from "./postslice";
import slice from "./slice";
import createslice1 from "./createslice1"
import Loginslice from "./Loginslice"
import Firstslice from "./Firstslice"
import Postshowslice from "./Postshowslice"
import crudslice from "./crudslice"
import Freshslice from "./Freshslice"
import Start1slice from "./Start1slice"
import Newstartslice from "./Newstartslice"
import Form1slice from "./Form1slice"
const store = configureStore({
  reducer: {
    counter: couterslice,
    post: postslice,
    user: slice,
    crud1:createslice1,
    login:Loginslice,
    first:Firstslice,
    postshow:Postshowslice,
    crud:crudslice,
    user:Freshslice,
    ss:Start1slice,
    crud2:Newstartslice,
    newuserdata:Form1slice
  },
});

export default store;



// https://67ab452f5853dfff53d6c917.mockapi.io/app/user
