import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Container from "@/components/containers/Container";
import { ImGithub } from "react-icons/im";
import AtiveLink from "@/components/AtiveLink";
import { BsMailbox, BsMailbox2 } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

export const metadata = {
  title: "SSLOG | 쓸데없고 유해한 블로그",
  description: "SSLOG : 부끄럽지만 가족같은 친구들의 쓸데없는 블로그, 쓸로그",
};

const Footer = () => {
  return (
    <Container className="h-20 mt-auto flex justify-center items-center text-gray-500">
      <div className="flex gap-5 justify-between items-center text-sm">
        <div>© SSLOG. Lee seok ju</div>
        <div>mail. tjrenffl8@naver.com</div>
        <AtiveLink href="https://github.com/Seotjuu/sslog">
          <ImGithub size={30} />
        </AtiveLink>
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
