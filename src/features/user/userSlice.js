import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState = {
  user:{username:'altynay sabitzhan'},
}

const userSlice = createSlice({
  name:'user',
  initialState,
  loginUser:(state,action)=>{
    console.log('login')
  },
  logoutUser:(staten)=>{
    console.log('logout')
  },
})

export const {loginUser,logoutUser}=userSlice.actions;

export default userSlice.reducer