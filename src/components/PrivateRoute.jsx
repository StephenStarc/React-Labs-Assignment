import { Navigate } from 'react-router-dom'
export default function PrivateRoute({Component}) {
    const user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user)
    return user ? <Component/> : <Navigate to="/login" replace/>
}