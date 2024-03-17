import {
    Card,
    CardHeader,
    GridItem,
    Image,
    CardBody,
    Button,
    HStack,

    Text,
    Divider,
    CardFooter,

  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";


export default function UserCard({data}) {
  const mov = useNavigate();
  return (
    <GridItem colSpan={{ base: 6, lg: 2, md: 3 }} m={10}>
    {" "}
    <Card w="auto">
      <CardHeader>
        {" "}
        <Image objectFit={"cover"} w={300} h={200} src={data.img} />
      </CardHeader>{" "}
      <Divider />{" "}
      <CardBody>
        <Text fontWeight="bold">Name :{data?.name}</Text>
        <br />
        <Text fontWeight="bold">G-mail :{data?.mail}</Text>
        <br />
        <Text fontWeight="bold">Phone No :{data?.phone}</Text>
        <br />
        <Text fontWeight="bold">
          Category :
          {data?.category === 2
            ? "maid"
            : data?.category === 1
            ? "General Worker"
            : "Recruiter"}
        </Text>
        <br />
        <HStack>
          Profession
          {data.profession.map((item) => {
            return (
              <Button colorScheme="blue" size={"xs"} fontWeight="bold">
                {item}
              </Button>
            );
          })}
        </HStack>
      </CardBody>
      <CardFooter>
        <Button onClick={()=>{
          localStorage.clear()
    mov("/")
        }}>
Log Out
        </Button>
      </CardFooter>
    </Card>
  </GridItem>
  )
}
