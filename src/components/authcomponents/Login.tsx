import AuthField from '@/components/textfields/AuthField'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { loginUser } from '@/store/auth/asyncThunks'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {authToken}=useAppSelector(state=>state.authReducer)

const handleLogin=(formData:{email: string; password: string})=>{
  dispatch(loginUser(formData))
  if(authToken){
    navigate('/')
  }
  
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
