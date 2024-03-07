"use client";

import "../styles/globals.css";

import { ContextProvider } from "@/context/context";
import { prefix } from "@/config/config";

export const metadata = {
  title: "SSLOG | 쓸데없고 유해한 블로그",
  description: "SSLOG : 부끄럽지만 가족같은 친구들의 쓸데없는 블로그, 쓸로그",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // img, file 사용시 prefix url 추가
    // <ContextProvider value={{ prifix: `${prefix}` }}>
    <html>
      <body>{children}</body>
    </html>
    // </ContextProvider>
  );
};

export default RootLayout;
