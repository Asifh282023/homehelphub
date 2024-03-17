import {
  Button,
  CardBody,
  Card,
  CardFooter,
  CardHeader,
  GridItem,
  Textarea,
  HStack,
} from "@chakra-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";


export default function Post({ data }) {
  const x = new Date();
  const date = x.getDate();
  const notify = useToast();
  const [post, setpost] = useState({
    desc: "",
    applicants: [],
    date: date,
  });
  const handleChange = (event) => {
    setpost({ ...post, [event.target.name]: event.target.value });
  };
  const uploaddata = async () => {
    let response;
    if(post.desc !== ""){
      response = await axios.post(
        `http://localhost:5000/homehelphub/createpost/${localStorage.getItem(
          "userid"
        )}`,
        post
      );
      if (response.status === 200) {
        window.location.reload();
        notify({
          status: "success",
          title: "Post Added",
          isClosable: true,
          duration: 3000,
        });
      }
    }else{
      notify({
        title:"Description required",
        status:"warning",
        isClosable:true,
        duration:2000
      })
    }
  
    
  };
  return (
    <GridItem colSpan={{ base: 6, lg: 4, md: 3 }} m={10}>
      <Card bgColor={"transparent"}>
        <CardHeader>
          <Card>
            <CardHeader>Create Post</CardHeader>
            <Textarea
              onChange={handleChange}
              name="desc"
              placeholder="Eg House maid required salary 10000 Rs/Month day shift "
            ></Textarea>
            <Button
              onClick={uploaddata}
              w={"30%"}
              position={"relative"}
              left={"70%"}
              colorScheme="green"
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Add
            </Button>
          </Card>
        </CardHeader>
        <CardBody bgColor={"blackAlpha.700"}>
          <CardHeader color={"white"}>My Activity</CardHeader>
          <HStack wrap={"wrap-reverse"}>
          {data.post.map((item) => {
            return (
              <Card mb={10} w={{base:'100%',lg:'50%',md:'70%'}} bgColor={"blue.800"} color={"white"}>
                <CardBody>
                 Description :- {item.desc} <br />
                 No Of Applicants :-  {item.applicants.length}
                </CardBody>

                <CardFooter display={"flex"} justifyContent={"end"}>
                  {item.date}
                </CardFooter>
              </Card>
            );
          })}
          </HStack>
        </CardBody>
      </Card>
    </GridItem>
  );
}
