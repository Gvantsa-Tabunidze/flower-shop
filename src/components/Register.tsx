import AuthField from '@/components/textfields/AuthField'
import { Typography } from '@mui/material'
import React from 'react'

const Register = () => {

  const handleRegister =()=>{
    console.log('hey you are registered successfully')
  }
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <AuthField type_of_auth='register' onSubmit={handleRegister}/>
    </div>
  )
}

export default Register
