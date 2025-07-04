import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './auth/auth.slice'

//State
const rootReducer = combineReducers({
authReducer
})
export type RootState = ReturnType<typeof rootReducer>

//Core
export const storeSetUp = ()=> configureStore({
    reducer: rootReducer,
    devTools:true
})

//Action
export type AppStore = ReturnType<typeof storeSetUp>
export type AppDispatch = AppStore['dispatch']