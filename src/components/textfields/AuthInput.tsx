import type { IInput } from '@/interfaces/AuthInputInterface'
import { FormControl, TextField } from '@mui/material'
import React from 'react'

const AuthInput:React.FC<IInput> = ({label, value, onChange, required, name, ...rest}) => {
  return (
    <div>
        <TextField label={label}  name={name} value={value} onChange={onChange} required={required}  {...rest}/>
    </div>
  )
}

export default AuthInput
