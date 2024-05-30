import { Navigate } from 'react-router-dom'
import NotAuth from '../Fun/NotAuth'
export default function PrivateRoute({Component}) {
    const user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user)
    return user ? <Component/> : <><NotAuth/></>
}