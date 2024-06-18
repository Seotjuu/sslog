import ActiveLink from "@/components/common/ActiveLink";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import { CiLock, CiUser } from "react-icons/ci";

const Signin = () => {
  return (
    <Container className="flex justify-center py-20">
      <FormContainer className="flex justify-center flex-col gap-6 border border-gray-300 rounded-md py-5">
        <h1 className="text-center border-[#eeeeee] border-b text-2xl p-4">
          로그인
        </h1>
        <div className="flex justify-center flex-col gap-4">
          <Input label={<CiUser size={20} />} type="id" placeholder="아이디" />
          <Input
            label={<CiLock size={20} />}
            type="password"
            placeholder="비밀번호"
          />

          <Button variant="dark" className="py-2">
            <ActiveLink href={"/"}>로그인</ActiveLink>
          </Button>
        </div>
        <div className="flex flex-row gap-4 text-sm p-4 border-[#eeeeee] border-t">
          <ActiveLink href={"#"}>아이디 찾기</ActiveLink>
          <ActiveLink href={"#"}>비밀번호 찾기</ActiveLink>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signin;
