import type { IInput } from '@/interfaces/auth/AuthInputInterface'
import { TextField } from '@mui/material'
import React from 'react'

const AuthInput:React.FC<IInput> = ({label, ...rest}) => {
  return (
    <div>
        <TextField label={label} {...rest}/>
    </div>
  )
}

export default AuthInput
