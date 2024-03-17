import { Box, VStack } from "@chakra-ui/react";
import "./loader.css";

export default function Loader() {
  return (
    <Box
      position={"absolute"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"100vh"}
    ><VStack>
<div class="loader"></div><br/>
      <p>Loading...</p>
    </VStack>
      
    </Box>
  );
}
