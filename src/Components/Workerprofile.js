import {
  VStack,
  Image,
  Center,
  GridItem,
  Card,
  CardBody,
  Button
} from "@chakra-ui/react";
import data from "./maid.json";
import { useNavigate } from "react-router-dom";

export default function Workerprofile() {
  const naviagete = useNavigate();
  return (
    <GridItem colSpan={6}>
        <Button onClick={()=>{
        naviagete(-1)
      }}>back</Button>
      <VStack m={10}>
        <Center>
          {" "}
          <Image
            w={90}
            h={90}
            border={"2px"}
            borderColor={"#e59560"}
            borderRadius={"50%"}
            src={
              "https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Female-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg"
            }
            backgroundSize={"auto"}
            background={"white"}
          />
        </Center>
        <VStack>
          {" "}
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.name}</Center>
          </Card>
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.age}</Center>
          </Card>
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.gender}</Center>
          </Card>
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.nationality}</Center>
          </Card>
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.contact.phone}</Center>
          </Card>
          <Card
            variant={"elevated"}
            style={{ boxShadow: "3px 3px black" }}
            w={300}
            borderLeft={"2px"}
            borderRight={"2px"}
            borderColor={"#1d3124"}
          >
            <Center> {data.contact.email}</Center>
          </Card>
        </VStack>
        <Card
          variant={"elevated"}
          style={{ boxShadow: "3px 3px black" }}
          w={300}
          borderLeft={"2px"}
          borderRight={"2px"}
          borderColor={"#1d3124"}
        >
          <CardBody>
            <Center>
              {" "}
              {data.address.street} {data.address.city}{" "}
            </Center>
            <Center>
              {" "}
              {data.address.state} {data.address.postal_code}{" "}
              {data.address.country}{" "}
            </Center>
          </CardBody>
        </Card>
        <Card
          variant={"elevated"}
          style={{ boxShadow: "3px 3px black" }}
          w={300}
          borderLeft={"2px"}
          borderRight={"2px"}
          borderColor={"#1d3124"}
        >
          <CardBody>
            <Center>
              {" "}
              {data.availability.days[0] +
                " " +
                data.availability.days[1] +
                " " +
                data.availability.days[2]}{" "}
            </Center>
            <Center> {data.availability.hours_per_day + "Hours daily"} </Center>
            <Center>
              {data.skills[0] + " " + data.skills[1] + " " + data.skills[2]}
            </Center>
            <Center>Expected Salary {data.salary_expectation}</Center>
          </CardBody>
        </Card>
      </VStack>
    </GridItem>
  );
}
