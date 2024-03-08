import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const prefix = process.env.NODE_ENV === "production" ? "/sslog/" : "";

const LinkUrl = ({ href, children }: LinkProps) => {
  return <Link href={prefix + href}>{children}</Link>;
};

export default LinkUrl;
