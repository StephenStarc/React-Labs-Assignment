import React from 'react'
import { Button, Card, CardBody } from "@nextui-org/react"
import { useState } from "react"
import '../styles.css'

function Counter() {

    
    const [ counter, setCounter ]=useState(0)

    const increment = () => {
        setCounter(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCounter(prevCount => Math.max(0, prevCount - 1))
    }

    const reset = () => {
        setCounter(0)
    }

    const getBackgroundSize = () => {
        const maxCount = 80; // Adjust this value as needed
        const percentage = Math.min(counter / maxCount, 1) * 80;
        return `${percentage}% 100%`;
      };

  return (
    <div className={`${'colors'} flex flex-col items-center justify-center`} style={{ backgroundSize: getBackgroundSize() }} justify="center" align="center">
    <Card
  className="border-none"
  shadow="sm"
>
  <CardBody>
    
  <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Counter</h1>
      <p className="text-5xl font-bold">{counter}</p>
      <div className="flex gap-4">
        <Button color="primary" className="text-xl" onClick={increment}>+</Button>
        <Button onClick={reset}>Reset</Button>
        <Button color="primary" className="text-xl"  onClick={decrement}>-</Button> 
      </div>
    </div>
  </CardBody>
</Card>
</div>
  )
}

export default Counter
