import {
  Image,
  Card,
  CardHeader,
  Text,
  CardFooter,
  Flex,
  CardBody,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Divider,
  Stack,
  Box,
  Img,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
export default function Template({ data }) {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (data.length === 0) {
      console.log(0);
    }
  }, []);

  return (
    <SimpleGrid gridTemplateColumns={"repeat(5,1fr)"} bgColor={"#192841"}>
      <GridItem colSpan={{ base: 6, lg: 6 }}>
     <Center>  <HStack display={"flex"} flexDirection={{ base: "column", lg: "row" }} wrap={"wrap"} gap={10}>
          {flag === false ? (
            data.map((item) => {
              console.log(data);
              return (
                <Card w={{ base: "100%", lg: "30%" }}>
                  <CardHeader>
                    <HStack justifyContent={"space-between"}>
                      <Stack direction={"row"}>
                        <Image
                          borderRadius={"50%"}
                          w={50}
                          h={50}
                          src={item.img}
                          objectFit={"cover"}
                        />
                        <Box>
                          <Text>{item.name}</Text>
                          <Text fontSize={"sm"} color={"grey"}>
                            {item.city}
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
                        +91 {item.phone} <br />
                        {item.mail}
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        {item.profession.map((prof) => {
                          return (
                            <Button size={"sm"} colorScheme="blue" m={1}>
                              {" "}
                              {prof}{" "}
                            </Button>
                          );
                        })}
                        <Divider />
                        Language <br />
                        {item.language.map((prof) => {
                          return (
                            <Button size={"sm"} colorScheme="blue" m={1}>
                              {" "}
                              {prof}{" "}
                            </Button>
                          );
                        })}
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <HStack
                          w={"full"}
                          display={"flex"}
                          justifyContent={"space-between"}
                        >
                          <Card>{item.address.city}</Card>
                          <Card>{item.address.state}</Card>
                          <Card>{item.address.country}</Card>
                        </HStack>
                      </CardFooter>
                    </Card>
                  </CardBody>
                </Card>
              );
            })
          ) : (
            <Spinner />
          )}
        </HStack></Center> 
      </GridItem>
    </SimpleGrid>
  );
}
