import AuthField from '@/components/textfields/AuthField'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { registerUser } from '@/store/auth/asyncThunks'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const dispatch = useAppDispatch()

  

  const handleRegister =(formData:{email: string; password: string})=>{
    dispatch(registerUser(formData))
    
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
