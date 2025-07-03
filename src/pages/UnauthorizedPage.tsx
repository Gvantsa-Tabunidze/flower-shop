import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



const UnauthorizedPage:React.FC = () => {

  return (
    <div>
    <Outlet />
 
    </div>
  )
}

export default UnauthorizedPage
