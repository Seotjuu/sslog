import { CiLock, CiUser } from "react-icons/ci";
import { ISignFormFields } from "../signup/signupFormFields";

export const signinFormFields: ISignFormFields[] = [
  {
    label: <CiUser size={20} />,
    type: "text",
    placeholder: "아이디",
    name: "id",
    message: "소문자 영문, 숫자 조합으로 6자 이상 20자 이하로 입력해주세요.",
    regex: /^[a-zA-Z0-9]{6,20}$/,
  },
  {
    label: <CiLock size={20} />,
    type: "password",
    placeholder: "비밀번호",
    name: "pwd",
    message: "영문(대소문자), 숫자, 특수문자 조합으로 8자 이상 20자 이하로 입력해주세요.",
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
  },
];
