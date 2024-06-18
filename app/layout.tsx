"use client";

import Navbar from "@/components/common/Navbar";
import "../styles/globals.css";
import Container from "@/components/common/containers/Container";
import { ImGithub } from "react-icons/im";
import ActiveLink from "@/components/common/ActiveLink";

const Footer = () => {
  return (
    <Container className="border-t h-20 mt-auto flex justify-center items-center text-gray-500">
      <div className="flex gap-5 justify-between items-center text-sm">
        <div>© 2024 SSLOG. Seotjuu</div>

        <ActiveLink href="https://github.com/Seotjuu/">
          <ImGithub size={25} />
        </ActiveLink>
      </div>
    </Container>
  );
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="flex flex-col min-h-[100vh]">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
