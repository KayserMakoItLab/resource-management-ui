import { useDisclosure } from "@chakra-ui/react";
import React from "react";

const CreateBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  return <></>;
};

export default CreateBar;
