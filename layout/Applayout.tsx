import { Stack } from "@chakra-ui/react";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Stack bgColor={"background"} height={"100%"} overflow={"hidden"}>
      {children}
    </Stack>
  );
};

export default AppLayout;
