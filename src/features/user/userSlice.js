import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState = {
  user:{username:'altynay sabitzhan'},
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    loginUser:(state,action)=>{
   
    },
    logoutUser:(state)=>{
      state.user =null;
      localStorage.removeItem('user')
      toast.success('Logged out successfully');
    },
  }
 
})

export const {loginUser,logoutUser}=userSlice.actions;

export default userSlice.reducer