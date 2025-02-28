import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}


const ActiveLink = ({ href, children }: LinkProps) => {
  return <Link href={href}>{children}</Link>;
};

export default ActiveLink;
