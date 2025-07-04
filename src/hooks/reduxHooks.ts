import type {AppDispath, RootState}  from "@/store/store";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = ()=>useDispatch<AppDispath>() //Hook for action
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector //Hook for state selection