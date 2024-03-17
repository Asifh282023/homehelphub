import {
  Image,
  Card,
  CardHeader,
  Text,
  Center,
  CardBody,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";
import data from "../Db.json";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import View from "./View";

export default function Workerslist({workers}) {
  const mov = useNavigate();
  const breakpoints = [
    {
      width:400,
      itemsToShow:1
    },
    {
      width: 500,
      itemsToShow: 3,
    },
    {
      width: 768,
      itemsToShow: 2,
    },
    {
      width: 1200,
      itemsToShow: 5,
    },
    {
      width: 1500,
      itemsToShow: 4,
    },
  ];

  return (
  
     <VStack bgColor={"transparent"}>
     <Center> <Text> Top Workers In your City</Text></Center>
        <Carousel breakPoints={breakpoints}>
         
          {workers.map((i) => {
            return (
              <Card  bgColor={"blue.50"}  mr={5}>
                <CardHeader
                w={150}
                  borderTop={"8px"}
                  borderColor={"blue.100"}
                  borderRadius={8}
                  bgColor={"white"}
                 
                >
                  <Center>
                    {" "}
                    <Image
                      w={90}
                      h={90}
                      border={"2px"}
                      borderColor={"blue.200"}
                      borderRadius={"50%"}
                      backgroundColor={"#f6f4e8"}
                      src={i.img}
                     
                      objectFit={"contain"}
                    />
                  </Center>
                </CardHeader>
                <Divider />
                <CardBody w={150}>
                  <Center>
                    <Text
                      size={"sm"}
                      fontSize={{ base: 12, lg: 16 }}
                      color={"#1d3124"}
                      position={"relative"}
                    >
                      {i.name}
                    </Text>
                  </Center>
                 <View i={i}/>
                </CardBody>
              </Card>
            );
          })}
        </Carousel>
        </VStack>
  );
}
