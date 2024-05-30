import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardFooter, Image, Button, CardBody} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import UserProfile from "./UserProfile";
import Layout from "./Layout";

export default function Dashboard() {
    return (
        <Layout>
    <div className="max-w-100 gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-3 justify-center items-center ">
    <Card isFooterBlurred className="w-full h-[240px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-large text-white uppercase font-bold">Welcome To Your Dashboard</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1509711833864-40699f806f41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
          <div>
            <p className="text-tiny text-white">Click your profile to access your dashboard</p>
          </div>
        </div>
        
      </CardFooter>
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