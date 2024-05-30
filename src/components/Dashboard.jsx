import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardFooter, Image, Button, CardBody} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import UserProfile from "./UserProfile";
import Layout from "./Layout";

export default function Dashboard() {

    const {displayName} = JSON.parse(localStorage.getItem("user-info"));
    return (
        <Layout>
    <div className="max-w-100 gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-3 justify-center items-center ">
    <Card isFooterBlurred className="w-full h-[240px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <h4 className="text-white text-xl uppercase font-bold">Welcome Home {displayName}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1509711833864-40699f806f41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Card>

    <Card className="col-span-12 sm:col-span-4 h-[240px]">
      <Counter />
    </Card>

    <Card className="col-span-12 sm:col-span-4 h-[240px]">
     <UserProfile />
    </Card>

    <Card className="col-span-12 sm:col-span-4 h-[240px]">
    <CardBody className="flex items-center justify-center p-4">React Chart Is Work In Progress</CardBody>
    </Card>
  </div>
  </Layout>
   )
}