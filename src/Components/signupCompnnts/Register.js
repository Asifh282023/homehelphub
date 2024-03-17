import { Button, Center, Progress, GridItem } from "@chakra-ui/react";

import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Form1 } from "./Form1";
import { OtpForm } from "./OtpForm";

export default function Register() {
  const notify = useToast();
  const [state, setState] = useState(1);
  const [user, setuser] = useState({
    name: "",
    mail: "",
    phone: "",
    password: "",
  });
  const handlesubmit = async () => {
    try {
      let response = await axios.get("http://localhost:5000/homehelphub/get");
      if (response.data) {
        const flag = validate(response.data);
        if (flag) {
          notify({
            title: "user Already Exist",
            status: "error",
            duration: 3000,
          });
        } else {
          const res = await axios.post(
            `http://localhost:5000/homehelphub/auth/${user.mail}`
          );

          if (res.status === 200) {
            notify({
              title: `OTP sent Successfully to  ${user.mail}`,
              status: "success",
              duration: 3000,
            });
            setState(state + 1);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const validate = (data) => {
    let flag = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].mail === user.mail) {
        flag = true;
        break;
      }
    }
    return flag;
  };
  return (
    <GridItem colSpan={6}>
      <>
        <Progress
          hasStripe
          value={state * 40}
          colorScheme={"whiteAlpha"}
          bgColor={"black"}
        />
        {state === 1 ? (
          <>
            {" "}
            <Form1 user={user} setuser={setuser} />{" "}
            <Center>
              <Button
                onClick={() => {
                  if (
                    user.mail === "" ||
                    user.name === "" ||
                    user.password === "" ||
                    user.phone === ""
                  ) {
                    notify({
                      title: "Please fill all the fields",
                      status: "warning",
                      duration: 3000,
                    });
                  }
                  handlesubmit();
                }}
                color={"white"}
                bgColor={"black"}
                w={"15%"}
              >
                Submit
              </Button>
            </Center>
          </>
        ) : state === 2 ? (
          <>
            {" "}
            <OtpForm user={user} />
            <Button
              onClick={() => {
                state === 1 ? console.log() : setState(state - 1);
              }}
              bgColor={"black"}
            >
              Back
            </Button>{" "}
          </>
        ) : null}
      </>
    </GridItem>
  );
}
