import { HStack, Heading, VStack } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <HStack
   
    
      flexDirection={{ base: "column", lg: "row", md: "row" }}
      justifyContent={"space-between"}
    >
      <Heading p={2} size={"md"} color={"blue.100"}>
        ℍ𝕠𝕞𝕖 ℍ𝕖𝕝𝕡 ℍ𝕦𝕓
      </Heading>

      <VStack flexDirection={"row"} display={"flex"} ml={"1s0%"} mt={2} color={"blue.100"}>
        <Searchbar></Searchbar>
        <Menu ></Menu>
      </VStack>
    </HStack>
  );
}
