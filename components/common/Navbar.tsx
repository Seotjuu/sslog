'use client'

import { useSession } from "next-auth/react";
import Button from "./Button";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const session = useSession();

  console.log(session);
  

  return (
    <div className="w-full flex justify-between items-center bg-black text-white shadow-lg py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%]">
      <h1 className="mobile:text-3xl tablet:text-4xl laptop:text-4xl desktop:text-4xl">
        <ActiveLink href={"/"}>SSLOG</ActiveLink>
      </h1>
      <div className="flex justify-center gap-2">
        <ActiveLink href={"/signin"}>
          <Button variant="light">로그인</Button>
        </ActiveLink>
        <ActiveLink href={"/signup"}>
          <Button variant="dark">회원가입</Button>
        </ActiveLink>
      </div>
    </div>
  );
};

export default Navbar;
