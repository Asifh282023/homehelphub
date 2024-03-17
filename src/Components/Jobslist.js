import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Center,
  CardFooter,
  VStack,
  Text,
  Divider,
  Box,
  HStack,
} from "@chakra-ui/react";

import Carousel from "react-elastic-carousel";
import "./carousel.css";
import Readmorebtn from "./Readmorebtn";
import { color } from "framer-motion";

export default function Jobslist({ jobs }) {
  const date = new Date();
  const potsed_on =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  console.log(potsed_on);
  const breakpoints = [
    {
      width: 400,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 1,
    },
    {
      width: 768,
      itemsToShow: 1,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
    {
      width: 1500,
      itemsToShow: 4,
    },
  ];

  return (
    <VStack bgColor={"transparent"}>
      <Text>House Hold Jobs Available in your city</Text>
      <Carousel breakPoints={breakpoints}>
        {jobs.map((i) => {
          return i.post.map((item) => {
            return (
              <Center>
                {" "}
                <Box p={10}>
                  <Card
                    minWidth={300}
                    maxWidth={"auto"}
                    minH={300}
                    m={10}
                    p={{ base: 5, lg: 1 }}
                    border={"1px solid white"}
                    borderRadius={20}
                    bgColor={{ base: "transparent", lg: "transparent" }}
                  >
                    <CardHeader>
                      <HStack display={"flex"} justifyContent={"center"}>
                        {" "}
                        <VStack>
                          <Image
                            w={"100px"}
                            h={"100px"}
                            position={"relative"}
                            borderRadius={"50%"}
                            src={i.img}
                          />
                          <Text color={"white"}>{i.name}</Text>
                        </VStack>
                      </HStack>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <Center>
                        <Text
                          color={"white"}
                          fontSize={"sm"}
                          p={1}
                        >
                          {item.desc}
                        </Text>
                      </Center>
                    </CardBody>
                    <CardFooter>
                      <Readmorebtn i={i} item={item} />
                    </CardFooter>
                  </Card>
                </Box>
              </Center>
            );
          });
        })}
      </Carousel>
    </VStack>
  );
}
