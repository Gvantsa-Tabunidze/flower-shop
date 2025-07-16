import type { AuthFormProps } from '@/interfaces/AuthFormProps'
import { Box, Button, IconButton, InputAdornment,  Typography } from '@mui/material'
import React, { useState } from 'react'
import AuthInput from './AuthInput'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import {Controller, useForm} from 'react-hook-form'








const AuthField:React.FC<AuthFormProps> = ({type_of_auth, onSubmit}) => {


  // // Password show
  const [show, setShow] = useState(false)

  const {handleSubmit, control} = useForm({defaultValues:{email:'', password:''}})
 
  return (
    <Box  component="form" onSubmit={handleSubmit(onSubmit)}
      sx={{ '& > :not(style)': { m: 2, width: '50ch' }, display:'flex', flexDirection:'column'}}>
        <Controller name='email' control={control} 
        rules={{required: 'Email is required', pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email'}}}  
        render={({field, fieldState})=>(<AuthInput {...field} label='Email' variant='standard' fullWidth 
        error={!!fieldState.error} helperText={fieldState.error?.message} InputProps={{
        startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
         }} 
        />)} />

        <Controller name='password' control={control} 
        rules={{required:'Password is required', minLength:{value:5, message: 'Password should contain at least 5 characters'}}} 
        render={({field, fieldState})=>(<AuthInput {...field} label='Password' type={show ? 'text' : 'password'} variant='standard' fullWidth 
        error={!!fieldState.error} helperText={fieldState.error?.message} InputProps={{
        startAdornment:(
            <InputAdornment position='start'><LockOutlineIcon /></InputAdornment>),
        endAdornment:(
            <InputAdornment position='end'><IconButton onClick={()=>setShow(prev=>!prev)}>{show ? <VisibilityOutlined />: <VisibilityOffOutlined />  }</IconButton></InputAdornment>)
          }}
        />)}
        />
      
        <Button type='submit'><Typography>{type_of_auth==='login' ? 'Login' : 'Register'}</Typography></Button>
    </Box>

  )
}

export default AuthField
