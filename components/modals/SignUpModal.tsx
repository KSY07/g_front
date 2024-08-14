import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { toast } from "react-toastify";

export const SignUpModal = ({onClose}: {onClose: () => void}) => {

  const [userId, setUserId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const onClickSignUp = () => {
    const data ={
      userId:userId,
      password: password,
      nickname: nickname,
      email: email,
      phone: phone,
    }

    axios.post("/company/signUp", data).then((e) => {
      if(e.status === 200) toast("회원가입 완료!! 로그인 해주세요.");
      onClose();
    }).catch((err) => toast("서버에 문제가 발생했습니다. 잠시 뒤에 시도해주세요."));
  }

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
                  <Input type="text" label="아이디" placeholder="아이디를 입력해주세요." value={userId} onChange={(e) => setUserId(e.target.value)}/>
                  <Input className="ml-4" type="text" label="닉네임" placeholder="닉네임을 입력해주세요." value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                </div>
                <div className="flex flex-row mt-6">
                  <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요." value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <Input className="ml-4" type="password" label="비밀번호 확인" placeholder="비밀번호를 한번 더 입력해주세요." value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                </div>
                <div className="flex mt-6">
                  <Input type="email" label="이메일" placeholder="이메일을 입력해주세요." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex mt-6">
                  <Input type="text" label="연락처" placeholder="연락처 번호를 입력해주세요." value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex mt-6">
                  <Button color="primary" onClick={onClickSignUp}>가입하기</Button>
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