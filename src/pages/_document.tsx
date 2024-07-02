import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: "Moview",
  name: "moview",
  content: "watch movie free here",
  description: "watch movie free here",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
