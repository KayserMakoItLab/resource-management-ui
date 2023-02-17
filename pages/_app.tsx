import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { breakpoints, fonts, fontSizes, colors } from "../theme";
import AppLayout from "../layout";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    breakpoints,
    fonts,
    fontSizes,
    colors,
  });
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}
