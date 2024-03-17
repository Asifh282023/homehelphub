import {
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  VStack,
  Text,
  Center,
  Button,
  Divider,
  
} from "@chakra-ui/react";
import axios from 'axios'
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import SelectLanguages from "./SelectLanguages";
import Profilepic from "./Profilepic";
import { useNavigate } from "react-router-dom";

export default function Userfillout() {
  const navigate = useNavigate();
  const notify = useToast();
  const [user_languages, setUselanguages] = useState([]);
  const [img_url, setimg_url] = useState(null);
  const [address, setaddress] = useState({
    street: "",
    area: "",
    city: "",
    state: "",
    country: "",
  });
  const deletelanguage = (item) => {
    const edited = user_languages.filter((i, index) => {
      if (index !== item) {
        return true;
      } else {
        return false;
      }
    });

    setUselanguages(edited);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setaddress({ ...address, [e.target.name]: e.target.value });
    

  };
  const handlesubmit = async() => {
    if (
      img_url === null ||
      user_languages === null ||
      address === null ||
      address.street === "" ||
      address.area === "" ||
      address.city === "" ||
      address.state === "" ||
      address.country === ""
    ) {
      notify({
        title: "Please fill all the fields",
        status: "warning",
        isClosable: true,
        duration: 3000,
      });
    }

    let data = {
      type:'Recruiter',
      img: img_url,
      language: user_languages,
      address: address,
    };
    const response = await axios.post(`http://localhost:5000/homehelphub/update/${localStorage.getItem("userid")}`,data);
    console.log(response.data)
    if(response.data.status === 200){
    navigate("/")
    }
    
  };
  return (
    <Center>
      <SimpleGrid
        gridTemplateColumns={"repeat(6,1fr)"}
        w={{ base: "100%", lg: "70%" }}
        m={10}
      >
        
        <Profilepic img_url={img_url} setimg_url={setimg_url} />
        <SelectLanguages
          deletelanguage={deletelanguage}
          user_languages={user_languages}
          setUselanguages={setUselanguages}
        />
        <GridItem colSpan={6}>
          {" "}
          <VStack
            w={"100%"}
            justifyContent={"center"}
            bgColor={"white"}
            boxShadow={"1px 1px black"}
            p={{ base: 0, lg: 10 }}
          >
            <HStack w={"100%"}>
              {" "}
              <Divider color={"blue"} />
              <Button colorScheme="blue" size={{ base: "sm", lg: "lg" }}>
                <Text p={5} fontSize={{ base: 12, lg: 15 }}>
                  Address
                </Text>
              </Button>
              <Divider />
            </HStack>
            <HStack flexDirection={{ base: "column", lg: "row" }}>
              {" "}
              <Text>STREET</Text>
              <> </>
              <Input
                w={"100%"}
                size={{ base: "sm", lg: "md" }}
                name="street"
                onChange={handleChange}
                required
              />
              <Text>AREA</Text>
              <> </>
              <Input
                w={"100%"}
                size={{ base: "sm", lg: "md" }}
                name="area"
                onChange={handleChange}
              />
              <Text>CITY</Text>
              <> </>
              <Input
                size={{ base: "sm", lg: "md" }}
                name="city"
                onChange={handleChange}
              />
              <Text>STATE</Text>
              <> </>
              <Input
                size={{ base: "sm", lg: "md" }}
                name="state"
                onChange={handleChange}
              />
              <Text>COUNTRY</Text>
              <> </>
              <Input
                size={{ base: "sm", lg: "md" }}
                name="country"
                onChange={handleChange}
              />
            </HStack>
            <Button colorScheme="blue" onClick={handlesubmit}>
              Submit
            </Button>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Center>
  );
}
