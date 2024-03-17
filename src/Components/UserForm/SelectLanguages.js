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
export default function SelectLanguages({
  deletelanguage,
  setUselanguages,
  user_languages,
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
                    Language
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
                  if (user_languages.includes("Kannada")) {
                    console.log();
                  } else {
                    setUselanguages([...user_languages, "Kannada"]);
                  }
                }}
              >
                Kannada
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (user_languages.includes("Hindi")) {
                    console.log();
                  } else {
                    setUselanguages([...user_languages, "Hindi"]);
                  }
                }}
              >
                Hindi
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (user_languages.includes("Tamil")) {
                    console.log();
                  } else {
                    setUselanguages([...user_languages, "Tamil"]);
                  }
                }}
              >
                Tamil
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (user_languages.includes("Telugu")) {
                    console.log();
                  } else {
                    setUselanguages([...user_languages, "Telugu"]);
                  }
                }}
              >
                Telugu
              </Button>
              <Button
                key={v4()}
                size={{ base: "xs", lg: "sm" }}
                borderRadius={30}
                onClick={() => {
                  if (user_languages.includes("Malayalam")) {
                    console.log();
                  } else {
                    setUselanguages([...user_languages, "Malayalam"]);
                  }
                }}
              >
                Malayalam
              </Button>
            </HStack>

            <HStack wrap={"wrap"} justifyContent={"center"}>
              {user_languages.map((item, index) => {
                return (
                  <Box key={v4() + index}>
                    <Button
                      variant={"ghost"}
                      size={"xs"}
                      onClick={() => {
                        deletelanguage(index);
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
