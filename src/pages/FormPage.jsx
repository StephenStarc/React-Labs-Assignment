import {Button, Input, Textarea} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

export default function FormPage(){

    const [Name,setName] = useState('')
    const [Address,setAddress] = useState('')
    const [Email,setEmail] = useState('')
    const [Phone,setPhone] = useState('')
    const [isFormChanged, setIsFormChanged] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          if (isFormChanged) {
            event.preventDefault();
            event.returnValue = ''; // for Chrome
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [isFormChanged])

    const onChangeHandler = (e) => {
        setIsFormChanged(true)
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                break;
            case 'address':
                setAddress(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'phone':
                setPhone(e.target.value)
                break;
        }
        setIsFormChanged(true);
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(Name == '' || Address == '' || Email == '' || Phone == ''){
            toast.error(`Please fill all the fields `)
        }else{
            const id = Math.random().toString(36).substring(2, 20);
            localStorage.setItem('assignment-form',JSON.stringify({id,Name,Address,Email,Phone}))
            toast(`🦄 Form Saved Successfully 🚀 `)
        }
       
       setIsFormChanged(false)
    }

    return (
        <Layout>
<div className="flex flex-col items-center justify-center height">
        <form onSubmit={submitHandler}  className="flex flex-col items-center justify-center gap-4 min-w-60 ">

        <Input type="text" label="Name" placeholder="Name" name="name" onChange={(e) => onChangeHandler(e)}/>
        <Textarea type="text" label="Address" placeholder="Address" name="address" onChange={(e) => onChangeHandler(e)}/>
        <Input type="email" label="Email" placeholder="Email" name='email' onChange={(e) => onChangeHandler(e)}/>
        <Input type="tel" label="Phone" placeholder="Phone" name="phone" onChange={(e) => onChangeHandler(e)}/>
        <Button type="submit">Submit</Button>
        </form>
    
        </div>
        </Layout>
    )
    }