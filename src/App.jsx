import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from '@nextui-org/react'
import NavbarComponent from './components/Navbar'
import CounterPage from './pages/CounterPage'
import FormPage from './pages/FormPage'
import UserProfile from './components/UserProfile'
import Layout from './components/Layout'
import HomeHeader from './components/HomeHeader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
    <HomeHeader/>
    </Layout>
 
    </>
  )
}

export default App
