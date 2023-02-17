import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={hideOverFlow}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const hideOverFlow = {
  // overflow: "hidden",
};
