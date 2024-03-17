import {
  Card,
  CardHeader,
  GridItem,
  SimpleGrid,
  Image,
  CardBody,
  Tabs,
  Tab,
  Button,
  HStack,
  TabPanels,
  TabPanel,
  CardFooter,
  Radio,
  RadioGroup,
  Input,
  FormLabel,
  VStack,
  Text,
  Divider,
  Box,
  Center,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDeleteLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import UserCard from "./UserCard";
import Post from "./Post";


export default function Myprofile() {
  const [data, setdata] = useState(null);
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/homehelphub/myprofile/${localStorage.getItem(
        "userid"
      )}`
    );
    setdata(response.data);
    console.log(response.data)
  };
  useEffect(() => {
    getData();
  }, []);
  const naviagete = useNavigate();

  return (
    <SimpleGrid templateColumns={"repeat(6,1fr)"} bgColor={"#192841"}>
      <GridItem colSpan={6}>
        <Button
          colorScheme="white"
          onClick={() => {
            naviagete(-1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </GridItem>
      {data !== null ? (
        <>
        <UserCard data={data} />
       { data.type === 'worker' ? null : 
        <Post  data={data}/>}</>
      ) : (
       <Spinner />
      )}
    </SimpleGrid>
  );
}
