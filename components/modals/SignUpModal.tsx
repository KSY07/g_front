import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export const SignUpModal = ({onClose}: {onClose: () => void}) => {

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="flex mt-6">
                <h1 className="text-3xl">고객 회원 가입</h1>
              </div>
              <div className="flex flex-col mt-8">
                <div className="flex flex-row">
                  <Input type="text" label="아이디" placeholder="아이디를 입력해주세요." />
                  <Input className="ml-4" type="text" label="닉네임" placeholder="닉네임을 입력해주세요." />
                </div>
                <div className="flex flex-row mt-6">
                  <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요." />
                  <Input className="ml-4" type="password" label="비밀번호 확인" placeholder="비밀번호를 한번 더 입력해주세요." />
                </div>
                <div className="flex mt-6">
                  <Input type="email" label="이메일" placeholder="이메일을 입력해주세요." />
                </div>
                <div className="flex mt-6">
                  <Input type="text" label="연락처" placeholder="연락처 번호를 입력해주세요." />
                </div>
                <div className="flex mt-6">
                  <Button color="primary">가입하기</Button>
                </div>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
}