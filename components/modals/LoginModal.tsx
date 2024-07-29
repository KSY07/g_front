import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useRouter} from "next/navigation";

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: LoginModalProps) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userType, setUserType] = useState<string>();

  const onClickLogin = () => {
    const signInBody = {
      userId: userId,
      password: password,
      userType: userType,
    };

    console.log(signInBody);

    axios
      .post("/company/signIn", signInBody)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          toast("로그인 완료.");
          onClose();
          setTimeout(() => {
              router.refresh();
          }, 500);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <ModalContent className="text-center">
        {(onClose) => (
          <>
            <ModalBody>
              <div className="flex flex-col">
                <div className="flex mt-10">
                  <div className="flex flex-row mt-10">
                    <Input
                      label="아이디"
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                    <Input
                      label="비밀번호"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={onClickLogin}>로그인</Button>
                  </div>
                  <RadioGroup
                    label="회원 유형을 선택해 주세요."
                    orientation="horizontal"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <Radio value="user">일반 고객</Radio>
                    <Radio value="company">제휴 업체</Radio>
                  </RadioGroup>
                </div>
              </div>
            </ModalBody>
            <ModalFooter />
          </>
        )}
      </ModalContent>
    </>
  );
};
