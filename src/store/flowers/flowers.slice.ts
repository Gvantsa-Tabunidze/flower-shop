
import { createSlice } from "@reduxjs/toolkit"
import { getFlowers } from "./flowersThunks"
import type { IFlowersList } from "@/interfaces/flowers/flowersList"


const initialState:IFlowersList = {
    flowersList: [],
    isLoading:false,
    error:null
}

const flowerSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getFlowers.fulfilled, (state, action)=>{
            state.flowersList = action.payload,
            state.isLoading=false
        }),
        builder.addCase(getFlowers.pending, (state)=>{
          state.isLoading = true,
          state.error=null
        }),
        builder.addCase(getFlowers.rejected,(state,action)=>{
          state.isLoading = false,
          state.error= action.payload as string
        })
    }
})

export default flowerSlice.reducer

