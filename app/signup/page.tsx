'use client';

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Container from "@/components/common/containers/Container";
import FormContainer from "@/components/common/containers/FormContainer";
import { IFormData, ISignFormFields, SignupFormFields } from "@/constant/signup/signupFormFields";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    pwd: "",
    pwdCheck: "",
    name: "",
    email: "",
    birth: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const checkValidation = (field_name: string) => {
    if(SignupFormFields.find((field: ISignFormFields) => field.name === field_name)!.regex.test(formData[field_name])) {
      if(field_name === "pwdCheck" && formData.pwd !== formData.pwdCheck) {
        return true;
      }
      return false
    }
    else if(formData[field_name] === "") {
      return false;
    }
    else {
      return true;
    }
  }

  const handleSubmit = async () => {
    try {
      if(document.getElementById("error_message") || Object.values(formData).includes("")) {
        alert("입력값을 확인해주세요.");
        return;
      }

      await axios.post("/api/auth/signup/", {
        userId: formData.id,
        password: formData.pwd,
        name: formData.name,
        email: formData.email,
        birthdate: formData.birth,
        phoneNumber: formData.phone
      }).then((res) => {
        if(res.status === 200) {
          alert("회원가입이 완료되었습니다.");
          window.location.href = "/signin";
        }
      });

    }
    catch(e:any) {
      console.log(e.message);
    }
  }

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
                onChange={handleChange}
                value={formData[field.name]}
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
            회원가입
          </Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Signup;
