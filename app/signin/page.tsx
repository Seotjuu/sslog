"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import SigninFindInfoModal from "@/components/signin/SigninFindInfoModal";
import { signinFormFields } from "@/constant/signin/signinFormFields";
import { ISignFormFields } from "@/constant/signup/signupFormFields";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IFormData {
  [key: string]: string;
  id: string;
  pwd: string;
}

const Signin = () => {
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    pwd: "",
  })

  const checkValidation = (field_name: string) => {
    if(signinFormFields.find((field: ISignFormFields) => field.name === field_name)!.regex.test(formData[field_name])) {
      return false
    }
    else if(formData[field_name] === "") {
      return false;
    }
    else {
      return true;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    try {
      if(document.getElementById("error_message") || Object.values(formData).includes("")) {
        alert("입력값을 확인해주세요.");
        return;
      }

      await signIn("credentials", {
        userId: formData.id,
        password: formData.pwd,
        redirect: false,
      }).then((res) => {
        console.log(res);
      })
    }
    catch(e:any) {
      console.log(e.message);
    }
  }

  return (
    <Container className="flex justify-center py-20">
      <FormContainer className="flex justify-center flex-col gap-6 border border-gray-300 rounded-md py-5">
        <h1 className="text-center border-[#eeeeee] border-b text-2xl p-4">
          로그인
        </h1>
        <div className="flex justify-center flex-col gap-4">
          {signinFormFields.map((field, index_st) => (
            <div key={index_st} className="flex flex-col gap-1">
              <Input
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
              {/* 정규식 함수 진행 */}
              {
                checkValidation(field.name) ? (
                  <span id="error_message" className="text-xs text-red-500">{field.message}</span>
                ): <></>
              }
            </div>
          ))}
          <Button variant="dark" onClick={handleSubmit}>
            로그인
          </Button>
        </div>
        <div className="text-sm py-2 border-[#eeeeee] border-t">
          <SigninFindInfoModal />
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signin;
