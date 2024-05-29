import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import "./index.css"
import CounterPage from './pages/CounterPage.jsx'
import FormPage from './pages/FormPage.jsx'
import TextEditorPage from './pages/TextEditorPage.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/counter',element:<CounterPage/>},
  {path:'/form',element:<FormPage/>},
  {path:'/text-editor',element:<TextEditorPage/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NextUIProvider>
    <RouterProvider router={router}></RouterProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
