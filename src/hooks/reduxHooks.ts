import type {AppDispatch, RootState}  from "@/store/store";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = ()=>useDispatch<AppDispatch>() //Hook for action
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector //Hook for state selection