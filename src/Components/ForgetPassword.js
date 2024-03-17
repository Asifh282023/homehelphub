import { Button, Input, useToast } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'

export default function ForgetPassword() {
  const notify = useToast()
  const [loader,setLoader] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [mail, setdata] = useState("");
  const handlesubmit = async()=>{
    setLoader(!loader)
    const response = await axios.get(`http://localhost:5000/homehelphub/recovery/${mail}`)
    if(response.data.code===200){
      
      notify({
        title:"Mail Sent",
        description:'Please check your Registerd  mail For Password',status:"success"
      })
      setLoader(false)
    }else{
      notify({
        title:"Warning",
        description:'This is Not Registered Mail Id',status:"warning"
      })
      setLoader(false)
    }
  }
  
  return (
 <>
    <Button variant={"link"} onClick={onOpen}>
      Forget Password ?
    </Button>
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Enter Your Registered Mail Id</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Input
            type="email"
            name="mail"
            placeholder="xyz@gmail.com"
            onChange={(e) => {
              setdata(e.target.value);
            }}
          />
        </AlertDialogBody>
        <AlertDialogFooter>
    {loader===true?<Spinner></Spinner>:null} 
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button bgColor={"black"} color={"white"} ml={3} onClick={handlesubmit}>
            Submit
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>

   
  ) 
}
