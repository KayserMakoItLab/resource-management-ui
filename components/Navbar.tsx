import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Stack,
  Text,
  VStack,
  Container,
  HStack,
  Link,
} from "@chakra-ui/react";

const Navbar = ({ hideSignOut = false, customButtons = <></> }) => {
  return (
    <Stack bgColor={"white"} py={3} position={"fixed"} zIndex={1} w={"full"}>
      <Container
        display={"flex"}
        maxW="7xl"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HStack spacing={4}>
          <Avatar size={"sm"} name="Margret Steven" />
          <VStack align={"flex-start"} spacing={0}>
            <Text color={"textColor"}>Margret Steven</Text>
            <Text color={"textColor"} fontSize={"0.625rem"}>
              Admin
            </Text>
          </VStack>
        </HStack>
        {/* {!hideSignOut && (
          <HStack
            as={Link}
            flexDir={"row"}
            _hover={{
              textDecoration: "none",
              spacing: "1rem",
            }}
            color={"textColor"}
          >
            <Text display={{ md: "unset", base: "none" }}>Sign Out</Text>
            <ArrowForwardIcon></ArrowForwardIcon>
          </HStack>
        )} */}
        {customButtons}
      </Container>
    </Stack>
  );
};
export default Navbar;
