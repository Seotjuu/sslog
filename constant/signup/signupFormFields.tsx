import { CiCalendar, CiLock, CiMail, CiPhone, CiUser } from "react-icons/ci";

export interface ISignupFormFields {
  label: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  message: string;
  regex: RegExp;
}

export const SignupFormFields: ISignupFormFields[] = [
  {
    label: <CiUser size={20} />,
    type: "text",
    placeholder: "아이디",
    name: "user_id",
    message: "소문자 영문, 숫자 조합으로 6자 이상 20자 이하로 입력해주세요.",
    regex: /^[a-zA-Z0-9]{6,20}$/,
  },
  {
    label: <CiLock size={20} />,
    type: "password",
    placeholder: "비밀번호",
    name: "user_pw",
    message: "영문, 숫자, 특수문자 조합으로 8자 이상 20자 이하로 입력해주세요.",
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
  },
  {
    label: <CiLock size={20} />,
    type: "password",
    placeholder: "비밀번호 확인",
    name: "user_pw_check",
    message: "비밀번호를 한번 더 입력해주세요.",
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
  },
  {
    label: <CiMail size={20} />,
    type: "text",
    placeholder: "이메일 주소",
    name: "user_email",
    message: "이메일 주소를 입력해주세요.",
    regex: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
  },
  {
    label: <CiUser size={20} />,
    type: "text",
    placeholder: "이름",
    name: "user_name",
    message: "이름을 입력해주세요.",
    regex: /^[가-힣]{2,4}$/,
  },
  {
    label: <CiCalendar size={20} />,
    type: "number",
    placeholder: "생년월일 8자리",
    name: "user_birth",
    message: "생년월일을 입력해주세요.",
    regex: /^[0-9]{8}$/,
  },
  {
    label: <CiPhone size={20} />,
    type: "number",
    placeholder: "휴대전화번호",
    name: "user_phone",
    message: "휴대전화번호를 입력해주세요.",
    regex: /^[0-9]{11}$/,
  },
];
