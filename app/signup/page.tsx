import ActiveLink from "@/components/common/ActiveLink";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import { CiLock, CiUser, CiMail, CiCalendar, CiPhone } from "react-icons/ci";
const Signup = () => {
  return (
    <Container className="flex justify-center py-20">
      <FormContainer className="flex justify-center flex-col gap-6 border border-gray-300 rounded-md py-5">
        <h1 className="text-center border-[#eeeeee] border-b text-2xl p-4">
          회원가입
        </h1>
        <div className="flex justify-center flex-col gap-4">
          {/* 정규식 추가 예정 */}
          <Input label={<CiUser size={20} />} type="id" placeholder="아이디" />
          <Input
            label={<CiLock size={20} />}
            type="password"
            placeholder="비밀번호"
          />
          <Input
            label={<CiLock size={20} />}
            type="password"
            placeholder="비밀번호 확인"
          />
          <Input
            label={<CiMail size={20} />}
            type="text"
            placeholder="[선택] 이메일 주소"
          />

          <Input label={<CiUser size={20} />} type="text" placeholder="이름" />
          <Input
            label={<CiCalendar size={20} />}
            type="number"
            placeholder="생년월일 8자리"
          />
          <Input
            label={<CiPhone size={20} />}
            type="number"
            placeholder="휴대전화번호"
          />

          <Button variant="dark" className="py-2">
            <ActiveLink href={"/signin"}>회원가입</ActiveLink>
          </Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signup;
