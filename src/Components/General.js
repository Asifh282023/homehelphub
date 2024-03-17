import {
  Center,
  GridItem,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Constructionworkers from "./GeneralComponents/Constructionworkers";
import Electrician from "./GeneralComponents/Electrician";
import Plumber from "./GeneralComponents/Plumber";
import Painter from "./GeneralComponents/Painter";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function General() {
  const [construction_worker, setConstruction_worker] = useState(null);
  const [electrician, setelectrician] = useState(null);
  const [plumber, setPlumber] = useState(null);
  const [painter, setPainter] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/homehelphub/gen_workers/${localStorage.getItem(
        "userid"
      )}`
    );
    if (response.data) {
      setConstruction_worker([...response.data.Constn_worker]);
      setelectrician([...response.data.Electrician]);
      setPlumber([...response.data.plumber]);
      setPainter([...response.data.Painter]);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const naviagete = useNavigate();
  return (
    <Tabs size={"xs"}>
      <Center>
        {" "}
        <TabList gap={5}>
          <Tab>
            <Button colorScheme="blue" size={"xs"}>
              {" "}
              <Text fontSize={{ base: 8, lg: 16 }}>Construction workers</Text>
            </Button>
          </Tab>
          <Tab>
            <Button colorScheme="blue" size={"xs"}>
              <Text fontSize={{ base: 8, lg: 16 }}>Electricians</Text>
            </Button>
          </Tab>
          <Tab>
            {" "}
            <Button colorScheme="blue" size={"xs"}>
              <Text fontSize={{ base: 8, lg: 16 }}>Plumbers</Text>
            </Button>
          </Tab>
          <Tab>
            {" "}
            <Center></Center>
            <Button colorScheme="blue" size={"xs"}>
              {" "}
              <Text fontSize={{ base: 8, lg: 16 }}>Painters</Text>
            </Button>
          </Tab>
        </TabList>
      </Center>
      <TabPanels>
        <TabPanel>
          <Skeleton
            isLoaded={painter === null ? false : true}
            h={100}
            
          >
            <Constructionworkers construction_worker={construction_worker} />
          </Skeleton>
        </TabPanel>
        <TabPanel>
          <Skeleton
            isLoaded={painter === null ? false : true}
            h={100}
            
          >
            <Electrician electrician={electrician} />
          </Skeleton>
        </TabPanel>
        <TabPanel>
          <Skeleton
            isLoaded={painter === null ? false : true}
            h={100}
            
          >
            <Plumber plumber={plumber} />
          </Skeleton>
        </TabPanel>
        <TabPanel>
          <Skeleton
            isLoaded={painter === null ? false : true}
            h={100}
            
          >
            <Painter painter={painter} />
          </Skeleton>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
