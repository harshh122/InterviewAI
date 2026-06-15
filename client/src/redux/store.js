import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import { createSlice } from "@reduxjs/toolkit";


export default configureStore({
  reducer: {
    user: userSlice
  },
})



