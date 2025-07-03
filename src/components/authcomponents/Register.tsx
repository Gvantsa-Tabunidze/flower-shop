import AuthField from '@/components/textfields/AuthField'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()

  const handleRegister =()=>{
    console.log('hey you are registered successfully')
  }
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1>Register here</h1>
      <AuthField type_of_auth='register' onSubmit={handleRegister}/>
      <span><Typography>or</Typography></span>
      <Button onClick={()=>navigate('/auth')}><Typography>Login</Typography></Button>
    </div>
  )
}

export default Register
