import AuthField from '@/components/textfields/AuthField'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { loginUser } from '@/store/auth/asyncThunks'
import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {authToken}=useAppSelector(state=>state.authReducer)

const handleLogin=(formData:{email: string; password: string})=>{
  dispatch(loginUser(formData))  
}

useEffect(()=>{
 if(authToken){
   toast.success('Hello baddy, you\'ve done successfull login', {
        position: "top-right"
      })
        setTimeout(()=>navigate('/'), 3000) 
      }
  
  
},[authToken, navigate])



  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
      />

      <h1>Login here</h1>
      <AuthField type_of_auth='login' onSubmit={handleLogin}/>
      <span><Typography>or</Typography></span>
      <Button onClick={()=>navigate('/auth/register')}><Typography>Register</Typography></Button>
      
    </div>
  )
}

export default Login
