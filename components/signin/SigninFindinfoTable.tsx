import {
  SignFindInfoTableTabs,
  SignFindInfoTableTabsIdFields,
  SignFindInfoTableTabsPwFields,
} from "@/constant/signin/signinFindInfoTableFields";
import Input from "../common/Input";
import { CiLock } from "react-icons/ci";
import Tabs from "../common/Tabs";
import Button from "../common/Button";
import { useState } from "react";

const SigninFindinfoTableChild = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case "id":
      return (
        <div className="flex flex-col gap-5 py-10">
          {SignFindInfoTableTabsIdFields.map((field, index_st) => (
            <Input
              key={index_st}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
          {/* 재전송 진행 시간 진행 */}
          <Button variant="dark">인증번호 전송</Button>
          <Input
            label={<CiLock size={20} />}
            type="number"
            placeholder="인증번호 6자리"
          />
        </div>
      );
    case "pw":
      return (
        <div className="flex flex-col gap-5 py-10">
          {SignFindInfoTableTabsPwFields.map((field, index_st) => (
            <Input
              key={index_st}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
          {/* 재전송 진행 시간 진행 */}
          <Button variant="dark">인증번호 전송</Button>
          <Input
            label={<CiLock size={20} />}
            type="number"
            placeholder="인증번호 6자리"
          />
        </div>
      );
  }
};

const SigninFindinfoTable = () => {
  const [activeTab, setActiveTab] = useState<string>("id");

  const activeTabClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setActiveTab(e.currentTarget.value);
  };

  return (
    <div>
      <Tabs
        tabsData={SignFindInfoTableTabs}
        activeTab={activeTab}
        activeTabClickHandler={activeTabClickHandler}
      />
      <SigninFindinfoTableChild activeTab={activeTab} />
    </div>
  );
};

export default SigninFindinfoTable;
