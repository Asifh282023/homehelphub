import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import Profilepic from "./Profilepic";
import SelectLanguages from "./SelectLanguages";
import { wrap } from "framer-motion";
import GeneralProfession from "./GeneralProfession";
import MaidProfesion from "./MaidProfession";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Userfillout_worker() {
  const naviagete =useNavigate();
  const [user_languages, setUselanguages] = useState([]);
  const [general_profession, setgeneral_profession] = useState([]);
  const [img_url, setimg_url] = useState(null);
  const [category, setCategory] = useState(0);
  const [maid_profesion, setmaidprofession] = useState([]);
  const [address, setaddress] = useState({
    street: "",
    area: "",
    city: "",
    state: "",
    country: "",
  });

  const handle_addr_change = (event) => {
    event.preventDefault();
    setaddress({ ...address, [event.target.name]: event.target.value });
  };

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
  const deleteprofession = (item) => {
    const edited = general_profession.filter((i, index) => {
      if (index !== item) {
        return true;
      } else {
        return false;
      }
    });

    setgeneral_profession(edited);
  };
  const deletemaid_profession = (item) => {
    const edited = maid_profesion.filter((i, index) => {
      if (index !== item) {
        return true;
      } else {
        return false;
      }
    });

    setmaidprofession(edited);
  };

  const combine = async () => {
    const profession =
      general_profession.length === 0 ? maid_profesion : general_profession;
    const data = {
      type:'worker',
      img: img_url,
      languages: user_languages,
      address: address,
      category: category,
      profession: profession,
    };
    const response = await axios.post(`http://localhost:5000/homehelphub/update_worker/${localStorage.getItem("userid")}`,data)
    console.log(response)
   naviagete("/")

  };

  return (
    <SimpleGrid gridTemplateColumns={"repeat(6,1fr)"}>
      <GridItem colSpan={6}>
        <Profilepic img_url={img_url} setimg_url={setimg_url} />
        <SelectLanguages
          user_languages={user_languages}
          setUselanguages={setUselanguages}
          deletelanguage={deletelanguage}
        />
        <FormControl isRequired>
          <FormLabel m={{ base: 2, lg: 5 }}>Address</FormLabel>
          <HStack
            wrap={wrap}
            flexDirection={{ base: "column", lg: "row" }}
            gap={{ base: 5 }}
            m={{ base: 2 }}
          >
            <Input
              bgColor={"white"}
              onChange={handle_addr_change}
              name="street"
              placeholder="Street"
            />
            <Input
              bgColor={"white"}
              onChange={handle_addr_change}
              name="area"
              placeholder="area"
            />
            <Input
              bgColor={"white"}
              onChange={handle_addr_change}
              name="city"
              placeholder="city"
            />
            <Input
              bgColor={"white"}
              onChange={handle_addr_change}
              name="state"
              placeholder="state"
            />
            <Input
              bgColor={"white"}
              onChange={handle_addr_change}
              name="country"
              placeholder="country"
            />
          </HStack>
        </FormControl>
        <FormControl isRequired>
          <FormLabel m={{ base: 2, lg: 5 }}>Category</FormLabel>

          <RadioGroup gap={20}>
            <HStack gap={10} m={{ base: 2, lg: 5 }}>
              {" "}
              <Radio
                value="general"
                onChange={() => {
                  setCategory(1);
                }}
              >
                General Worker
              </Radio>
              <Radio
                value="maid"
                onChange={() => {
                  setCategory(2);
                }}
              >
                Maid
              </Radio>{" "}
            </HStack>
          </RadioGroup>
          <FormControl isRequired>
            <FormLabel>Choose Your Work</FormLabel>
            {category === 1 ? (
              <GeneralProfession
                general_profession={general_profession}
                setgeneral_profession={setgeneral_profession}
                deleteprofession={deleteprofession}
              />
            ) : category === 2 ? (
              <MaidProfesion
                maid_profesion={maid_profesion}
                setmaidprofession={setmaidprofession}
                deletemaid_profession={deletemaid_profession}
              />
            ) : null}
            <Button colorScheme="blue" onClick={combine}>
              {" "}
              Submit
            </Button>
          </FormControl>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}
