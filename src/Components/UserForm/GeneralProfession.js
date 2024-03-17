import {
  Button,
  Divider,
  Center,
  GridItem,
  HStack,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 } from "uuid";
export default function General_profession({
  setgeneral_profession,
  general_profession,
  deleteprofession,
}) {
  return (
    <>
      <GridItem
        colSpan={6}
        bgColor={"white"}
        border={"1px"}
        borderColor={"black"}
        m={5}
      >
        <Center>
          <VStack w={"100%"}>
            <Center>
              <HStack w={"100%"}>
                {" "}
                <Divider color={"blue"} />
                <Button colorScheme="blue" size={{ base: "sm", lg: "lg" }}>
                  <Text p={5} fontSize={{ base: 12, lg: 15 }}>
                    Profession
                  </Text>
                </Button>
                <Divider />
              </HStack>
            </Center>
            <HStack wrap={"wrap"}>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (general_profession.includes("Construction Worker")) {
                    console.log();
                  } else {
                    setgeneral_profession([
                      ...general_profession,
                      "Construction Worker",
                    ]);
                  }
                }}
              >
                Contstruction Worker
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (general_profession.includes("Electrician")) {
                    console.log();
                  } else {
                    setgeneral_profession([
                      ...general_profession,
                      "Electrician",
                    ]);
                  }
                }}
              >
                Electrician
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (general_profession.includes("Plumber")) {
                    console.log();
                  } else {
                    setgeneral_profession([...general_profession, "Plumber"]);
                  }
                }}
              >
                Plumber
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (general_profession.includes("Painter")) {
                    console.log();
                  } else {
                    setgeneral_profession([...general_profession, "Painter"]);
                  }
                }}
              >
                Painter
              </Button>
            </HStack>

            <HStack wrap={"wrap"} justifyContent={"center"}>
              {general_profession !== null
                ? general_profession.map((item, index) => {
                    return (
                      <Box key={v4() + index}>
                        <Button
                          variant={"ghost"}
                          size={"xs"}
                          onClick={() => {
                            deleteprofession(index);
                          }}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faXmark} color="red" />
                        </Button>
                        <Button
                          display={"flex"}
                          justifyContent={"end"}
                          size={{ base: "xs", lg: "sm" }}
                          colorScheme="green"
                        >
                          <Text size={"sm"}> {item}</Text>
                        </Button>
                      </Box>
                    );
                  })
                : null}
            </HStack>
          </VStack>
        </Center>
      </GridItem>
    </>
  );
}
