import type { AuthFormProps } from '@/interfaces/AuthFormProps'
import { Box, Button, InputAdornment,  Typography } from '@mui/material'
import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import AuthInput from './AuthInput'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';


const AuthField:React.FC<AuthFormProps> = ({type_of_auth, onSubmit}) => {
  const [userData, setUserData]=useState({
    email:'',
    password:''
  })


  const handleInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target as HTMLInputElement;
    setUserData({...userData, [name]:value})
  }

  const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    onSubmit(userData)
  }

  return (
    <Box  component="form" onSubmit={handleSubmit}
      sx={{ '& > :not(style)': { m: 2, width: '50ch' }, display:'flex', flexDirection:'column'}}>
        <AuthInput label='Email' name='email' value={userData.email} onChange={handleInputChange} variant='standard' fullWidth
         InputProps={{
          startAdornment:(<InputAdornment position='start'><MailOutlineIcon /></InputAdornment>)}} />

        <AuthInput label='Password' name='password' value={userData.password} onChange={handleInputChange}  variant='standard'  fullWidth
        InputProps={{
          startAdornment:(<InputAdornment position='start'><LockOutlineIcon /></InputAdornment>)}} />
        <Button type='submit'><Typography>{type_of_auth==='login' ? 'Login' : 'Register'}</Typography></Button>
    </Box>

  )
}

export default AuthField
