import { Avatar, Card, Divider, HStack, Stack, Text } from "@chakra-ui/react";

const UserProject = ({
  users,
}: {
  users: {
    id: number;
    employee: {
      avatarURL: string;
      first_name: string;
      last_name: string;
      projects: {
        name: string;
        hours: number;
        start_date: string;
        end_date: string;
      }[];
    };
  };
  index: number;
}) => {
  return (
    <Stack>
      <>
        <Card
          w={"full"}
          flexDir={"row"}
          borderRadius={0}
          borderColor={"#EEEEEE"}
          shadow={0}
          h={10}
          alignItems={"center"}
        >
          <>
            <Avatar
              mx={2}
              size={"xs"}
              src={users.employee.avatarURL}
              name={users.employee.first_name + " " + users.employee.last_name}
            />
            <Text fontSize={"md"}>
              {users.employee.first_name + " " + users.employee.last_name}
            </Text>
          </>
        </Card>
        {users.employee.projects.map((proj: any) => (
          <>
            <HStack>
              <Text fontSize={"md"} color={"#969696"} px={3} py={1} zIndex={1}>
                {proj.name}
              </Text>
            </HStack>
            {/* <Divider alignSelf={"center"} w={"100%"} borderColor={"#D8DAE5"} /> */}
          </>
        ))}
      </>
    </Stack>
  );
};

export default UserProject;
