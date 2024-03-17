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
export default function MaidProfesion({
  deletemaid_profession,
  setmaidprofession,
  maid_profesion,
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
                  if (maid_profesion.includes("Cleaning")) {
                    console.log();
                  } else {
                    setmaidprofession([...maid_profesion, "Cleaning"]);
                  }
                }}
              >
                Cleaning
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (maid_profesion.includes("Cooking")) {
                    console.log();
                  } else {
                    setmaidprofession([...maid_profesion, "Cooking"]);
                  }
                }}
              >
                Cooking
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (maid_profesion.includes("CareTaking")) {
                    console.log();
                  } else {
                    setmaidprofession([...maid_profesion, "CareTaking"]);
                  }
                }}
              >
                CareTaking
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (maid_profesion.includes("Gardening")) {
                    console.log();
                  } else {
                    setmaidprofession([...maid_profesion, "Gardening"]);
                  }
                }}
              >
                Gardening
              </Button>
            </HStack>

            <HStack wrap={"wrap"} justifyContent={"center"}>
              {maid_profesion.map((item, index) => {
                return (
                  <Box key={v4() + index}>
                    <Button
                      variant={"ghost"}
                      size={"xs"}
                      onClick={() => {
                        deletemaid_profession(index);
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
              })}
            </HStack>
          </VStack>
        </Center>
      </GridItem>
    </>
  );
}
