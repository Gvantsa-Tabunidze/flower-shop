import Login from '@/components/Login'
import Register from '@/components/Register'
import React from 'react'
import { Outlet } from 'react-router-dom'



const UnauthorizedPage:React.FC = () => {
  return (
    <div>
    <Outlet />
    </div>
  )
}

export default UnauthorizedPage
