import {
  Image,
  Card,
  CardHeader,
  Text,
  Flex,
  CardBody,
  Button,
  GridItem,
  HStack,
  Box,
  Stack,
  Divider,
  CardFooter,
  Spinner,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import data from "../Db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faListDots } from "@fortawesome/free-solid-svg-icons";

export default function Maidlist() {
  const [workers, setWorkers] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/homehelphub/gethinfo/${localStorage.getItem(
        "userid"
      )}`
    );
    if (response.data) {
      setWorkers([...response.data.workers]);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const naviagete = useNavigate();
  if (workers !== null) {
    return (
      <GridItem colSpan={{ base: 6, lg: 6 }} bgColor={"#192841"} minHeight={'100vh'}>
        <Button
          colorScheme="white"
          onClick={() => {
            naviagete(-1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
       
        <HStack flexDirection={{ base: "column", lg: "row" }}>
          {workers.map((item) => {
            return (
             
              <Card w={{ base: "100%", lg: "30%" }} m={5} key={item._id}>
                <CardHeader>
                  <HStack justifyContent={"space-between"}>
                    <Stack direction={"row"}>
                      <Image
                        borderRadius={"50%"}
                        w={50}
                        h={50}
                        src={item.img}
                      />
                      <Box>
                        <Text>{item.name}</Text>
                        <Text fontSize={"sm"} color={"grey"}>
                          {item.address.city}
                        </Text>
                      </Box>
                    </Stack>
                    <Button variant={"ghost"}>
                      <FontAwesomeIcon icon={faListDots} />
                    </Button>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <Card bgColor={"blue.50"}>
                    <CardHeader>
                      +91
                      {item.phone} <br />
                      {item.mail}
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <HStack justifyContent={"space-around"}>
                        {item.profession.map((itemm) => {
                          return (
                            <Button colorScheme="teal" size={"sm"}>
                              {itemm + "  "}
                            </Button>
                          );
                        })}
                      </HStack>
                      <Divider />
                      <Text>Language</Text>
                      <HStack justifyContent={"space-around"}>
                        {item.language.map((itemm) => {
                          return (
                            <Button colorScheme="teal" size={"sm"}>
                              {itemm + "  "}
                            </Button>
                          );
                        })}
                      </HStack>
                    </CardBody>
                    <Divider />
                    <CardFooter display={"flex"} flexDirection={"column"}>
                      <Card w={"100%"} p={1} color={"white"} bgColor={"teal"}>
                        {item.address.area}
                      </Card>
                      <Card w={"100%"} p={1} >
                        {item.address.city}
                      </Card>
                      <Card w={"100%"} p={1} color={"white"} bgColor={"teal"}>
                        {item.address.state}
                      </Card>
                      <Card w={"100%"} p={1}>
                        {item.address.country}
                      </Card>
                    </CardFooter>
                  </Card>
                </CardBody>
              </Card>
             
            );
          })}
        </HStack>
      
      </GridItem>
    );
  } else {
    return  <Skeleton isLoaded={false}>  </Skeleton>
  }
}
