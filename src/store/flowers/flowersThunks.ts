import type { ISingleFlower } from "@/interfaces/flowers/flower";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlowers = createAsyncThunk(
    'flowers/getFlowers',
    async (_, thunkAPI) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        const response = await axios.get('http://localhost:5001/plants')
        return response.data
    
    } catch (error) {
        return thunkAPI.rejectWithValue('Fetching flowers failed')
    }
  },
)