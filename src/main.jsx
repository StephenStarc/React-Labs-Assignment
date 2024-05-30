import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import "./index.css"
import CounterPage from './pages/CounterPage.jsx'
import FormPage from './pages/FormPage.jsx'
import TextEditorPage from './pages/TextEditorPage.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './components/PrivateRoute.jsx'
import Dashboard from './components/Dashboard.jsx'
import Lost from './Fun/Lost.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/counter',element:<CounterPage/>},
  {path:'/form',element:<FormPage/>},
  {path:'/text-editor',element:<TextEditorPage/>},
  {path:'/dashboard',element:<PrivateRoute Component={Dashboard}/>},
  {path:'*',element:<Lost/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NextUIProvider>
    <RouterProvider router={router}/>
    <ToastContainer/>
    </NextUIProvider>
  </React.StrictMode>,
)
