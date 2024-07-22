import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Radio, RadioGroup } from "@nextui-org/radio";

export const LoginModal = () => {

  const onClickLogin = () => {
    return (<>

    </>);
  }

  return (
    <>
      <ModalContent className="text-center">
        {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col">
                  <div className="flex mt-10">
                    <div className="flex flex-row mt-10">
                      <Input type="text" label="아이디" />
                      <Input type="password" label="비밀번호" />
                      <Button>로그인</Button>
                    </div>
                    <RadioGroup
                      label="회원 유형을 선택해 주세요."
                      orientation="horizontal"
                    >
                      <Radio value="user">일반 고객</Radio>
                      <Radio value="company">제휴 업체</Radio>
                    </RadioGroup>
                  </div>
                </div>

              </ModalBody>
              <ModalFooter />
            </>
          )
        }
      </ModalContent>
    </>
  );
}