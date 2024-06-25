"use client";

import { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";
import SigninFindinfoTable from "./SigninFindinfoTable";

const SigninFindInfoModal = () => {
  const [show, setShow] = useState<boolean>(false);

  // show handler
  const modalShowHandler = (): void => {
    setShow(!show);
  };

  return (
    <Modal
      size="md"
      isOpen={show}
      modalButton={
        <button
          type="button"
          onClick={modalShowHandler}
          className="py-1 hover:underline hover:rounded-lg  duration-300"
        >
          아이디 / 비밀번호 찾기
        </button>
      }
    >
      <Modal.Header onClick={modalShowHandler}>
        아이디 / 비밀번호 찾기
      </Modal.Header>
      <Modal.Body>
        <SigninFindinfoTable />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark">확인</Button>
        <Button
          variant="light"
          className="px-4 py-2"
          onClick={modalShowHandler}
        >
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SigninFindInfoModal;
