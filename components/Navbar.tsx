import Button from "./Button";
import AtiveLink from "./AtiveLink";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-black text-white shadow-lg py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%]">
      <h1 className="mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-4xl">
        <AtiveLink href={"/"}>SSLOG</AtiveLink>
      </h1>
      <div className="flex justify-center gap-2">
        <AtiveLink href={"/signin"}>
          <Button variant="light">로그인</Button>
        </AtiveLink>
        <AtiveLink href={"/signup"}>
          <Button variant="dark">회원가입</Button>
        </AtiveLink>
      </div>
    </div>
  );
};

export default Navbar;
