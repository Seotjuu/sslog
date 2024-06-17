import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import Link from "next/link";

const Signin = () => {
  return (
    <Container className="flex justify-center py-10">
      <FormContainer className="flex justify-center flex-col gap-6 border border-gray-300 rounded-md py-5">
        <h1 className="text-center border-[#eeeeee] border-b text-2xl p-4">
          로그인
        </h1>
        <div className="flex justify-center flex-col gap-4">
          <Input label="ID" type="id" placeholder="아이디" />
          <Input label="PW" type="password" placeholder="비밀번호" />

          <Button variant="dark" className="py-2">
            로그인
          </Button>
        </div>
        <div>
          <Link href={"#"}>아이디 찾기</Link>
          <Link href={"#"}>비밀번호 찾기</Link>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signin;
