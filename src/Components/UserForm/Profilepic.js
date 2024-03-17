import {
  VStack,
  Button,
  Image,
  GridItem,
  Input,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  listAll,
  list,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";

export default function Profilepic({ img_url, setimg_url }) {
  const [state,setState] = useState(null)
  const [image, setImage] = useState(null);

  const uploadImg = async () => {
    setState(true)
    if (image === null) return;
    const path = `${image.name + v4()}`;
    const imageref = ref(storage, `Recruiters_Images/${path}`);
    uploadBytes(imageref, image).then(async (data) => {
      getDownloadURL(data.ref).then((url) => {
        setimg_url(url);
        setState(false)
      });
    });
  };
  return (
    <>
      <GridItem colSpan={6}>
        <VStack>
          {img_url !== null ? (
            <Image
              w={100}
              h={100}
              src={img_url}
              borderRadius={"50%"}
              objectFit={"contain"}
              bgColor={"white"}
            />
          ) : (
            <Image
              w={100}
              h={100}
              src="https://cdn0.iconfinder.com/data/icons/commercial-and-business-set-10/512/add_user-512.png"
            />
          )}

          <Center>
            {" "}
            <Input
              type="file"
              placeholder="Add Profile Picture"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <Button onClick={uploadImg} colorScheme="blue" >Upload</Button>
            {state===true ? <Spinner />:null}
          </Center>
        </VStack>
      </GridItem>
    </>
  );
}
