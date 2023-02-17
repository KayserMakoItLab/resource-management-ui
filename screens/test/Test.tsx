import {
  ArrowForwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { HStack, Stack, Text, Link, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../components";
import CalenderLayout from "./components";

const Test = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const [changeMonth, setChangeMonth] = useState(d.getMonth());
  const [changeYear, setChangeYear] = useState(d.getFullYear());

  const months = month[changeMonth];
  if (changeMonth < 0) {
    setChangeMonth(11);
    setChangeYear(changeYear - 1);
  } else if (changeMonth > 11) {
    setChangeMonth(0);
    setChangeYear(changeYear + 1);
  }

  return (
    <Stack minH={"100vh"} h={"100%"}>
      <Navbar
        hideSignOut
        customButtons={
          <HStack>
            <Button onClick={() => setChangeMonth(changeMonth - 1)}>
              <ChevronLeftIcon />
            </Button>
            <Box as={Stack} spacing={0} alignItems={"center"} w={"5rem"}>
              <Text>{months}</Text>
              <Text>{changeYear}</Text>
            </Box>
            <Button onClick={() => setChangeMonth(changeMonth + 1)}>
              <ChevronRightIcon />
            </Button>
          </HStack>
        }
      />
      <CalenderLayout changeMonth={changeMonth} changeYear={changeYear} />
    </Stack>
  );
};

export default Test;
