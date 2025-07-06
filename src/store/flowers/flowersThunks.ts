import type { ISingleFlower } from "@/interfaces/flowers/flower";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlowers = createAsyncThunk(
    'flowers/getFlowers',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5001/flowers')
        return response.data
    
    } catch (error) {
        return thunkAPI.rejectWithValue('Fetching flowers failed')
    }
  },
)