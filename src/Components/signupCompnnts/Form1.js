import {
  Input,
  Card,
  VStack,
  Center,
  FormControl,
  Heading,
  FormLabel,
  CardHeader,
  CardBody,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Form1 = ({ user, setuser }) => {
  const transport = useNavigate();
  const handlechange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Center>
      {" "}
      <VStack
        w={{ base: "100%", lg: "50%" }}
        position={"relative"}
        mt={{ base: "20%", lg: "10%" }}
        minHeight={"50vh"}
        borderRadius={10}
        m={2}
      >
        <Card w={"full"}>
          <CardHeader display={"flex"} justifyContent={"space-between"}>
            <Button w={"40%"} bgColor={"black"} color={"white"} isDisabled>
              Sign Up
            </Button>
            <Button
              w={"40%"}
              bgColor={"black"}
              color={"white"}
              onClick={() => {
                transport("/login");
              }}
            >
              Sign In
            </Button>
          </CardHeader>
          <FormControl
            isRequired
            display={"flex"}
            justifyContent={"center"}
            mt={5}
          >
            <FormLabel w={100}>Full Name</FormLabel>
            <Input
              w={"70%"}
              placeholder="Name"
              name="name"
              onChange={handlechange}
              required={true}
            />
          </FormControl>
          <FormControl
            isRequired
            display={"flex"}
            justifyContent={"center"}
            mt={5}
          >
            <FormLabel w={100}>Gmail</FormLabel>{" "}
            <Input
              w={"70%"}
              placeholder="Gmail"
              type="gmail"
              name="mail"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl
            isRequired
            display={"flex"}
            justifyContent={"center"}
            mt={5}
          >
            <FormLabel w={100}>Phone No</FormLabel>{" "}
            <Input
              w={"70%"}
              placeholder="Phone Number"
              name="phone"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl
            isRequired
            display={"flex"}
            justifyContent={"center"}
            mt={5}
            mb={3}
          >
            <FormLabel w={100}>Password</FormLabel>{" "}
            <Input
              w={"70%"}
              placeholder="Create Password"
              name="password"
              onChange={handlechange}
            />
          </FormControl>
        </Card>
      </VStack>
    </Center>
  );
};
