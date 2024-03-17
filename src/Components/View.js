import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    Text,
    HStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { useDisclosure } from "@chakra-ui/react";
  
  export default function View({ i }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    return (
      <>
        <Button
          position={"sticky"}
          bottom={0}
          w={"100%"}
          colorScheme="blue"
          onClick={onOpen}
        >
          View
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
            <AlertDialogHeader>{i.name}</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text>
                {" "}
                {i.address.street + " "}
                {i.address.area + " "}
                {i.address.city + " "}
              </Text>
              <HStack justifyContent={"end"}>
                {i.profession.map((item)=>{
                    return(
                        <Button colorScheme="teal" size={"sm"}>
                            {item+"  "}
                        </Button>
                    )
                })}
              </HStack>
            </AlertDialogBody>
            <AlertDialogFooter>
             <Text>
            Phone No. {i.phone}   
             </Text>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
  