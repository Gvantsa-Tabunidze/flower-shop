import type { IAuthState } from "@/interfaces/auth/authStateInterface"
import { createSlice} from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./asyncThunks"




const initialState:IAuthState= {
    authToken:localStorage.getItem('authToken') || false,
    isLoading:false,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout(state){
            state.authToken =false
            localStorage.removeItem('authToken')
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(loginUser.fulfilled, (state, action ) =>{
            state.authToken=action.payload
            localStorage.setItem('authToken', action.payload)
            state.error = null,
            state.isLoading=false
        }),
        builder.addCase(loginUser.pending, (state)=>{
            state.isLoading=true,
            state.error = null
        }),
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.isLoading=false,
            state.error=action.payload as string
        });

        builder.addCase(registerUser.fulfilled, (state, action)=>{
            state.authToken=action.payload
             localStorage.setItem('authToken', action.payload)
             state.isLoading=false,
             state.error=null
        }),
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }),
         builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });

    }
})

export default authSlice.reducer
export const {logout} = authSlice.actions