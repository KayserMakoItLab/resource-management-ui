import { HStack, Stack, Text } from "@chakra-ui/react";

const Dates = ({ days }: { days: Date[] }) => {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <HStack spacing={0}>
      {days.map((x: any) => (
        <>
          <Stack
            py={2}
            minWidth={"3.5rem"}
            alignItems={"center"}
            border={"0.5px solid #D8DAE5"}
            h={"100% !important"}
            spacing={0}
            bgColor={
              day[x.getDay()] == "Sat" || day[x.getDay()] == "Sun"
                ? "#E6E8F0"
                : "white"
            }
          >
            <Text fontSize={"xs"}>{day[x.getDay()]}</Text>
            <Text fontSize={"xs"}>{x.getDate()}</Text>
          </Stack>
        </>
      ))}
    </HStack>
  );
};

export default Dates;
