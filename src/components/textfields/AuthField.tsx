import type { AuthFormProps } from '@/interfaces/AuthFormProps'
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import React, { useState, type ChangeEvent, type FormEvent } from 'react'

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
      sx={{ '& > :not(style)': { m: 2, width: '40ch' }, display:'flex', flexDirection:'column'}}>
      <TextField label="Email" name='email' value ={userData.email} onChange={handleInputChange} variant="standard" />
      <TextField label="Password" name='password' value={userData.password} onChange={handleInputChange} variant="standard" />
     <div style={{display:'flex', gap:'12px', justifyContent:'center'}}>
      <Button type='submit'><Typography>{type_of_auth==='login' ? 'Login' : 'Register'}</Typography></Button>
      </div>
     
    </Box>

  )
}

export default AuthField
