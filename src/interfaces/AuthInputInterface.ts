import type { TextFieldProps } from "@mui/material";
import type { ChangeEvent } from "react";

export interface IInput extends Omit<TextFieldProps, 'onChange' | 'value' | 'name'>  {
    label:string,
    value: string,
    name:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    required?:boolean,
    
}