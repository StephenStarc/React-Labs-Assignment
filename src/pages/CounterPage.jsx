import { Button, Card, CardBody } from "@nextui-org/react"
import { useState } from "react"
import '../styles.css'
import Layout from "../components/Layout"
import Counter from "../components/Counter"
export default function CounterPage(){
    return (
      <Layout>
    <Counter/>
    </Layout>
    )
    }