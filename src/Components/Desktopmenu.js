import React from "react";
import { Text, Button, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'

export default function Desktopmenu() {
  const naviagate= useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  return (
    <>
    <Button
    ref={btnRef}
    colorScheme="blue"
  
    onClick={onOpen}
    size={"sm"}

  >
   <FontAwesomeIcon icon={faBars} />
  </Button>
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={btnRef}
   
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />

      <DrawerBody bgColor={"blue.100"} minHeight={'100VH'}>
        <VStack gap={50} mt={100}>
          <Button variant={"outline"} borderRadius={"50%"} w={100}
          h={100} colorScheme="white"
         onClick={()=>{naviagate("/myprofile")}}
         >
           <VStack> <FontAwesomeIcon icon={faUser} fontSize={30} />
          <Text> Profile</Text>
           </VStack>
           
          </Button>
          <Button variant={"outline"} colorScheme="white" leftIcon={<FontAwesomeIcon icon={faA} />} >
            About Us
          </Button>
        </VStack>
      </DrawerBody>

      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
  </>
  )
}
