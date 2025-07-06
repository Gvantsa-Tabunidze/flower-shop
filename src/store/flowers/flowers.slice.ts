
import { createSlice } from "@reduxjs/toolkit"
import { getFlowers } from "./flowersThunks"
import type { IFlowersList } from "@/interfaces/flowers/flowersList"

const initialState:IFlowersList = {
    flowersList: []
}

const flowerSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getFlowers.fulfilled, (state, action)=>{
            state.flowersList = action.payload
        }),
        builder.addCase(getFlowers.pending, (state)=>{
        
        }),
        builder.addCase(getFlowers.rejected,(state,payload)=>{

        })
    }
})

export default flowerSlice.reducer

