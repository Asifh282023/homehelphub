import { Center } from "@chakra-ui/react";

import {
  Button,
  Card,
  Text,
  PinInput,
  HStack,
  PinInputField,
  CardHeader,
} from "@chakra-ui/react";

import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const OtpForm = ({ user }) => {
  const navigate = useNavigate();
  const [Userotp, setUserotp] = useState("");
  const maill = user.mail.split("@")[0];
  const one = maill[0];
  const two = maill[maill.length - 1];
  const three = maill[maill.length - 2];
  const four = maill[1];
  const otp = one + two + three + four;
  const handlechange = (event) => {
    setUserotp(Userotp + event.target.value.toString());
  };
  const verify = async () => {
    if (Userotp === otp) {
      alert("Verified Successfully", "Account Created");
      setUserotp("");
      const res = await axios.post(
        "http://localhost:5000/homehelphub/add",
        user
      );
     localStorage.setItem("userid",user.mail);
      navigate("/userform");
    } else {
      alert("wrong otp");
      setUserotp("");
    }
  };
  return (
    <Center>
      <Card m={10} w={{ base: "100%", lg: "50%" }}>
        <CardHeader display={"flex"} justifyContent={"center"}>
          <Text>OTP sent to {user.mail}</Text>
        </CardHeader>
        <HStack justifyContent={"center"} m={10}>
          <PinInput type="alphanumeric" mask>
            <PinInputField onChange={handlechange}></PinInputField>
            <PinInputField onChange={handlechange}></PinInputField>
            <PinInputField onChange={handlechange}></PinInputField>
            <PinInputField onChange={handlechange}></PinInputField>
          </PinInput>
        </HStack>
        <Button colorScheme="orange" onClick={verify}>
          Verify
        </Button>
      </Card>
    </Center>
  );
};
