import { CiMail, CiUser } from "react-icons/ci";

export interface ISignFindInfoTableFields {
  label: React.ReactNode;
  type: string;
  placeholder: string;
  message: string;
  regex: RegExp;
}

export const SignFindInfoTableTabsIdFields: ISignFindInfoTableFields[] = [
  {
    label: <CiUser size={20} />,
    type: "text",
    placeholder: "이름 또는 별명",
    message: "한글, 영문 포함 3글자 이상 10글자 이하로 입력해주세요.",
    regex: /^[가-힣]{2,4}$/,
  },
  {
    label: <CiMail size={20} />,
    type: "text",
    placeholder: "이메일",
    message: "이메일 형식에 맞지 않습니다.",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
];

export const SignFindInfoTableTabsPwFields: ISignFindInfoTableFields[] = [
  {
    label: <CiUser size={20} />,
    type: "text",
    placeholder: "아이디",
    message: "아이디를 입력해주세요.",
    regex: /^[a-zA-Z0-9]{4,12}$/,
  },
  {
    label: <CiMail size={20} />,
    type: "text",
    placeholder: "이메일",
    message: "이메일 형식에 맞지 않습니다.",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
];

export interface ISignFindInfoTableTabs {
  tab_name: string;
  tab_id: string;
}

// tabs
export const SignFindInfoTableTabs: ISignFindInfoTableTabs[] = [
  {
    tab_name: "아이디",
    tab_id: "id",
  },
  {
    tab_name: "비밀번호",
    tab_id: "pw",
  },
];
