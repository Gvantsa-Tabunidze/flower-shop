import { useAppSelector } from '@/hooks/reduxHooks'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {
 const {authToken}= useAppSelector(state=>state.authReducer)

return authToken ? <Outlet /> : <Navigate to ={'/auth'} />
}

export default ProtectedRoutes
