import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const auth = {token:false}
const ProtectedRoutes = () => {

return auth.token ? <Outlet /> : <Navigate to ={'/login'} />
}

export default ProtectedRoutes
