import AuthField from '@/components/textfields/AuthField'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { registerUser } from '@/store/auth/asyncThunks'
import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'

const Register = () => {
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  const {authToken}=useAppSelector(state=>state.authReducer)

  useEffect(()=>{
   if(authToken){
    toast.success('Hello baddy, you\'ve done successfull registration', {
      position: "top-right"
    })
      setTimeout(()=>navigate('/'), 2000) 
    }
  },[authToken, navigate])


  const handleRegister =(formData:{email: string; password: string})=>{
    dispatch(registerUser(formData))
    
  }



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

      <h1>Register here</h1>
      <AuthField type_of_auth='register' onSubmit={handleRegister}/>
      <span><Typography>or</Typography></span>
      <Button onClick={()=>navigate('/auth')}><Typography>Login</Typography></Button>
    </div>
  )
}

export default Register
