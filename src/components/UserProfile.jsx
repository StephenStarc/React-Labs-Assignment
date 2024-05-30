// src/components/UserProfile.js
import { Avatar, Card, CardBody } from "@nextui-org/react";
import dataFormatter from "../utils/dataFormatter";
export default function UserProfile() {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const date = dataFormatter(userInfo.lastLoginAt) 
  return userInfo ? <><CardBody>
  <div className="flex flex-col items-center justify-center gap-3 mt-2">
  <Avatar src={userInfo.photoURL} size="xl"></Avatar>
    <h1 className="text-2xl font-bold">User Profile</h1>
    <p>Name: {userInfo.displayName}</p>
    <p>Email: {userInfo.email}</p>
    <p>Last Login: {date}</p>
  </div></CardBody></> : <CardBody className="flex items-center justify-center p-4">Error fetching user profile</CardBody>
}
