import AuthField from '@/components/textfields/AuthField'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

const handleLogin=()=>{
  console.log('hey you are logged in')
}

  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1>Login here</h1>
      <AuthField type_of_auth='login' onSubmit={handleLogin}/>
      <span><Typography>or</Typography></span>
      <Button onClick={()=>navigate('/auth/register')}><Typography>Register</Typography></Button>
      
    </div>
  )
}

export default Login
