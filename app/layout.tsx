import Navbar from "@/components/Navbar";
import "../styles/globals.css";

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
    <html>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
