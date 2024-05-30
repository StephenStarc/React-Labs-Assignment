import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { Link as RouterLink} from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import {Avatar, AvatarIcon} from "@nextui-org/avatar";
import { LuLogOut } from "react-icons/lu";
export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const user = JSON.parse(localStorage.getItem('user-info'))
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
  if(user){
    setIsLoggedIn(true)
  }
},[])
  const handleGoogleLogin = async () => {
    const provider =  new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      const userData = result.user;
      localStorage.setItem('user-info', JSON.stringify(userData))
      setIsLoggedIn(true)
    })
    
  }

  const handleLogout = () => {
    localStorage.removeItem('user-info')
    setIsLoggedIn(false)
  }
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <RouterLink to='/'>
        <h1 className=' text-lg font-bold  text-black text-black-600 md:text-4xl'>
          REACT<span className='bg-black text-white'>LABS</span>
          </h1>
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <RouterLink to={'/form'}>Form</RouterLink>
        </NavbarItem>
        <NavbarItem>
        <RouterLink to={'/counter'}>Counter</RouterLink>
        </NavbarItem>
        <NavbarItem>
        <RouterLink to={'/text-editor'}>Text Editor</RouterLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user && isLoggedIn ? <><RouterLink to={'/dashboard'}><Avatar src={user.photoURL} size="md" isBordered  icon={<AvatarIcon />} /></RouterLink><NavbarItem className="hidden lg:flex"><p>{user.displayName}</p></NavbarItem> <Button color="danger" onClick={handleLogout} className="flex"><LuLogOut /></Button></>: 
        (<><NavbarItem className="hidden lg:flex">
          <Button color="primary" onClick={handleGoogleLogin}>Login</Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
        <Button color="primary" onClick={handleGoogleLogin} variant="flat">
          Sign Up
        </Button>
      </NavbarItem></>)}
        
      </NavbarContent>
      <NavbarMenu>
      {user && isLoggedIn ? <><Avatar src={user.photoURL} size="md" isBordered  icon={<AvatarIcon />} /><p>{user.displayName}</p> <Button color="danger" onClick={handleLogout} className="flex"><LuLogOut /></Button></>: 
        (<><NavbarItem className="lg:flex">
          <Button color="primary" onClick={handleGoogleLogin}>Login</Button>
        </NavbarItem>
        <NavbarItem>
        <Button color="primary" onClick={handleGoogleLogin} variant="flat">
          Sign Up
        </Button>
      </NavbarItem></>)}
      </NavbarMenu>
    </Navbar>
  );
}
