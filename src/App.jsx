import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from '@nextui-org/react'
import NavbarComponent from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent/>
    </>
  )
}

export default App
