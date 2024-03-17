import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  GridItem,
  HStack,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import ForgetPassword from "./ForgetPassword";

export default function Login() {
  const notify= useToast()
    const transport = useNavigate();
  const [state, setState] = useState(false);
  const [message,setmessage] = useState("")
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async () =>{
    const response = await axios.post('http://localhost:5000/homehelphub/login',data);
    if(response.data.code===200){
      localStorage.setItem("userid",data.mail);
      transport("/")
    }else if(response.data.code===400){
      notify({
        status:"error",
        title:'Password Is Incorrect',
        duration:3000,
        isClosable:true
      })
    }else{
      notify({
        status:"warning",
        title:'User Not Found',
        duration:3000,
        isClosable:true
      })
    }
  }
  return (
    <>
      <SimpleGrid gridTemplateColumns={"repeat(6,1fr)"}>
        <GridItem
          colSpan={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card w={{ base: "90%", lg: "50%" }}>
            <CardHeader>
              <Center>
                {" "}
                <Heading>Sign In</Heading>
              </Center>
            </CardHeader>
            <CardBody>
              <label>Gmail</label>
              <Input
                name="mail"
                bgColor={"whitesmoke"}
                type="text"
                onChange={handleChange}
              />
              <label>Password</label>
              <HStack>
                {" "}
                <Input
                  bgColor={"whitesmoke"}
                  type={state ? "text" : "password"}
                  onChange={handleChange}
                  name="password"
                />
                <Button
                  bgColor={"black"}
                  position={"relative"}
                  onClick={() => {
                    setState(!state);
                  }}
                >
                  <FontAwesomeIcon icon={faEye} color="white" />
                </Button>{" "}
              </HStack>
              <Box m={2} display={"flex"} justifyContent={"end"}><ForgetPassword /></Box>
              <Button
                bgColor={"black"}
                color={"white"}
                w={"full"}
                mt={5}
               onClick={submit}
              >
                Sign In
              </Button>
            </CardBody>
            <CardFooter
              display={"flex"}
              justifyContent={"center"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              Don't Have an Account ? Click here
              <Button variant={"link"} ml={2} onClick={()=>{
                transport("/Register")
              }}>
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </SimpleGrid>
    </>
  );
}
