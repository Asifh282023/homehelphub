import React from "react";
import { useMediaQuery, Button, HStack, VStack } from "@chakra-ui/react";
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
import { faBars, faUser, faA } from "@fortawesome/free-solid-svg-icons";
import Desktopmenu from "./Desktopmenu";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargescreen] = useMediaQuery("(min-width: 40em)");
  return (
    <>
      {isLargescreen ? (
        <HStack gap={10} p={2}>
     
          <Button
            variant={"link"}
            color={"blue.100"}
            onClick={() => {
              navigate("/maidprofiles");
            }}
          >
            Maid Profiles
          </Button>
          <Desktopmenu />
        </HStack>
      ) : (
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

              <DrawerBody bgColor={"blue.100"} minHeight={"100VH"}>
                <VStack gap={50} mt={100}>
              
                  <Button
                    variant={"outline"}
                   colorScheme="blue"
                    onClick={() => {
                      navigate("/maidprofiles");
                    }}
                  >
                    Maid Profiles
                  </Button>


                  <Button
                    variant={"outline"}
                    colorScheme="blue"
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    onClick={() => {
                      navigate("/myprofile");
                    }}
                  >
                    My Profile
                  </Button>
                  <Button
                    variant={"outline"}
                    colorScheme="blue"
                    leftIcon={<FontAwesomeIcon icon={faA} />}
                  >
                    About Us
                  </Button>
                </VStack>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
}
