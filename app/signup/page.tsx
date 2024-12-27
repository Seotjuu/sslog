import ActiveLink from "@/components/common/ActiveLink";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import { SignupFormFields } from "@/constant/signup/signupFormFields";
import { CiLock, CiUser, CiMail, CiCalendar, CiPhone } from "react-icons/ci";
const Signup = () => {
  return (
    <Container className="flex justify-center py-20">
      <FormContainer className="flex justify-center flex-col gap-6 border border-gray-300 rounded-md py-5">
        <h1 className="text-center border-[#eeeeee] border-b text-2xl p-4">
          회원가입
        </h1>
        <div className="flex justify-center flex-col gap-4">
          
          {SignupFormFields.map((field, index_st) => (
            <div key={index_st} className="flex flex-col gap-1">
              <Input
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
              />
              {/* 정규식 함수 진행 */}
              {/* <span className="text-xs text-red-500">{field.message}</span> */}
            </div>
          ))}

          <Button variant="dark">
            <ActiveLink href={"/signin"}>회원가입</ActiveLink>
          </Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signup;
