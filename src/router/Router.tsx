import Navbar from '@/components/navbar/Navbar'
import ProtectedRoutes from '@/pages/ProtectedRoutes'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import UnauthorizedPage from '@/pages/UnauthorizedPage'
import Login from '@/components/authcomponents/Login'
import Register from '@/components/authcomponents/Register'
import Subscription from '@/pages/Subscribtion'


const Router:React.FC = () => {
  
  return (
   <Routes>
        <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Navbar routes={routes}/>}>
                <Route  index element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/subscribtion' element={<Subscription />}/>
            </Route>
        </Route>

        <Route path='/auth' element={<UnauthorizedPage />}>
          <Route index element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
        </Route>
   </Routes>
  )
}

export default Router
