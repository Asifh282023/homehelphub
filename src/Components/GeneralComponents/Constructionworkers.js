import { Box, Button, Card, CardBody, CardFooter, CardHeader,Center,GridItem,HStack,Image,Spinner,Text } from "@chakra-ui/react";
import React from "react";

export default function Constructionworkers({construction_worker}) {
  
if(construction_worker!== null){


  return (
   
    <HStack wrap={"wrap"}>
      {construction_worker.map((person)=>{
        return(
<Card w={{base:'100%' ,lg:'30%'}} bgColor={"blue.100"} key={person._id}>

<CardBody>
  <HStack justifyContent={'space-between'}>
 
  <Image w={90} borderRadius={'50%'} h={90} src={person.img}/>
  <Box>
  <Text>{person.name}</Text>
  <Text>{person.address.city}</Text>
  <Text>+91 {person.phone}</Text>
  </Box>
  </HStack>
</CardBody>

</Card>
        )
      })}

</HStack>

  )}
  else{
    <Spinner />
  }
}
