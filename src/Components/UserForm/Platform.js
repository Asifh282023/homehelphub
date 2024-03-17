import React, { useState } from 'react'
import { GridItem,HStack,Heading,Button } from '@chakra-ui/react'
import Userfillout_worker from './Userfillout_worker'
import Userfillout from './Userfillout'

export default function Platform() {
    const [state,setState]= useState(0)
  return (
    <GridItem colSpan={6}>
    {" "}
    <HStack spacing={10}>
      {" "}
      <Heading fontSize={15}> What are you looking for</Heading>
      <li>
        {" "}
        <Button variant={"link"}onClick={()=>{
            setState(2)
        }} >Workers</Button>
      </li>
      <li>
        {" "}
        <Button variant={"link"} 
        onClick={()=>{
            setState(1)
        }}
        >Jobs</Button>
      </li>
    </HStack>
    { state === 1 ?<Userfillout_worker /> : state === 2 ? <Userfillout /> : <h3>Choose Any one of the Above</h3> } 
  </GridItem>
  )
}
