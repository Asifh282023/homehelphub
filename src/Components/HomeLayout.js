import { Text, Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Workerslist from "./Workerslist";
import Jobslist from "./Jobslist";
import Navbar from "./Navbar";
import Typical from "react-typical";
import General from "./General";
import Instruction from "./Instruction";
import axios from "axios";
import Loader from "./Loader";

export default function HomeLayout() {
  const [workers, setWorkers] = useState(null);
  const [gen_workers, setgen_Workers] = useState(null);
  const [jobs, setJobs] = useState(null);
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/homehelphub/gethinfo/${localStorage.getItem(
        "userid"
      )}`
    );
    if (response.data) {
      setWorkers([...response.data.workers]);
      setJobs([...response.data.jobs]);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      getData();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <SimpleGrid
      gridTemplateColumns={"repeat(6,1fr)"}
      spacing={{ base: 10, lg: 20 }}
      bgColor={"#192841"}
    >
      {jobs !== null ? (
        <>
          <GridItem colSpan={6}>
            <Navbar />
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 3 }}>
            <Center>
              {" "}
              <Text fontSize={{ base: 20, lg: 30 }} color={"blue.100"}>
                Are you currently in need of a{" "}
                <Typical
                  steps={[
                    "House Maid",
                    1000,
                    "Construction Worker",
                    1000,
                    "Plumber",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />{" "}
                or domestic help for your household ?
              </Text>
            </Center>
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 3 }}>
            <Workerslist workers={workers} />
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 6 }}>
            <Instruction />
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 6 }}>
            <Jobslist jobs={jobs} />
          </GridItem>
          <GridItem colSpan={6}>
            <General />
          </GridItem>{" "}
        </>
      ) : (
        <GridItem colSpan={6}>
<Loader />
        </GridItem>
          
      )}
    </SimpleGrid>
  );
}
