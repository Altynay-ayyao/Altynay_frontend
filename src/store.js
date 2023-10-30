import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

//store is a state container: is a single javascript object that lives for the duration of apl it's created by passing in reducer, which is a function that returns the next state tree,given the current state tree and an action to handle. and allow access to state, and state updates

export const store = configureStore({
    reducer:{
        cartState: cartReducer,
        userState:userReducer,
      
    }
})