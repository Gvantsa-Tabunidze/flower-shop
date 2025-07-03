import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const auth = {token:true}
const ProtectedRoutes = () => {

return auth.token ? <Outlet /> : <Navigate to ={'/auth'} />
}

export default ProtectedRoutes
