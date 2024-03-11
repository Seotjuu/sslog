import Button from "@/components/Button";
import Input from "@/components/Input";
import Container from "@/components/containers/Container";
import FormContainer from "@/components/containers/FormContainer";

const Signin = () => {
  return (
    <Container className="flex justify-center">
      <div className="flex justify-center border border-gray-300 rounded-md py-5 mobile:w-full tablet:w-full labtop:w-2/3 desktop:w-2/3">
        <FormContainer className="">
          <Input label={<div>ID</div>} type="id" placeholder="아이디" />
          <Input label={<div>PW</div>} type="password" placeholder="비밀번호" />

          <Button variant="dark">로그인</Button>
        </FormContainer>
      </div>
    </Container>
  );
};

export default Signin;
