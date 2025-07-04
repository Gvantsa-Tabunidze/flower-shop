import type { AuthPayload } from "@/interfaces/authPayload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(payload:AuthPayload, thunkApi)=> {
        try {
            
            const response = await axios.post('http://localhost:5000/api/login', payload, {
                withCredentials:true,
            })
            return response.data.accessToken
        } catch (error) { 
            return thunkApi.rejectWithValue('Authorization failed')
            
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (payload:AuthPayload, thunkApi) => {
        try {
            // console.log("Sending:", JSON.stringify(payload));
            const res =await axios.post('http://localhost:5000/api/registration', payload, {
                withCredentials:true
            })
            return res.data.accessToken
        } catch (error) {
            return thunkApi.rejectWithValue('Registration failed')
        }
    }
)