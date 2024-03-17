import { Card, CardHeader, HStack, Input, Select } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import Template from "./Template";

export default function Searchbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [city, setcity] = useState("");
  const [data, setData] = useState(null);
  const [type, setType] = useState("workers");
  const handlechange = (event) => {
    setcity(event.target.value);
  };
  const getData = async () => {
    const response = await axios.post(
      `http://localhost:5000/homehelphub/search/${city.toLowerCase()}`
    );
    if (response.status === 200) {
      setData(response.data);
      {
        onOpen();
      }
    }
  };

  return (
    <>
      <Card m={{ base: 0, lg: 0 }} size={"sm"}>
        <CardHeader>
          <HStack>
            <Select size={"sm"} w={"auto"}>
              <option
                onChange={() => {
                  setType("jobs");
                }}
              >
                Workers
              </option>
              <option
                onChange={() => {
                  setType("workers ");
                }}
              >
                Jobs
              </option>
            </Select>

            <Input
              type="text"
              placeholder="Eg Bengaluru"
              size={{ base: "sm", lg: "lg" }}
              w={{ base: "auto", lg: 300 }}
              onChange={handlechange}
            />
            <Button
              colorScheme="blue"
              leftIcon={
                <FontAwesomeIcon
                  icon={faSearch}
                  fontSize={{ base: 12, lg: 15 }}
                  onClick={getData}
                />
              }
              size={{ base: "sm", lg: "md" }}
            ></Button>
          </HStack>
        </CardHeader>
      </Card>

      <>
        <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {type}Availaible in {city}
            </ModalHeader>
            <ModalCloseButton bgColor={"red.500"} />
            <ModalBody bgColor={"#192841"}>
              <Template data={data} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="brand" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
