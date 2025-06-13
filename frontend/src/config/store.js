import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice'
import authSlice from '../slices/authSlice'

export const store = configureStore({
    reducer:{
        userSlice,
        authSlice
    }
})