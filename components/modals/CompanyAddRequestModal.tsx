import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";

interface CompanyAddRequestModalProps {
  onClose: () => void;
  toastCallBack: (noti:string) => void;
}

export const CompanyAddRequestModal = ({onClose, toastCallBack}:CompanyAddRequestModalProps) => {
  const [companyId, setCompanyId] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [imgFile, setImgFile] = useState<File>();
  const [imgPath, setImgPath] = useState("");
  const fileRef = useRef<HTMLInputElement>();

  const onUploadImg = () => {
    if (fileRef.current && fileRef.current.files) {
      const img = fileRef.current.files[0];

      setImgFile(img);

      const reader = new FileReader();

      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgPath(reader.result as string);
      };
    }
  };

  const onClickReg = () => {
    const req = {
      companyId: companyId,
      companyPassword: companyPassword,
      companyName: companyName,
    };
    const formData = new FormData();
    formData.append("dto", new Blob([JSON.stringify(req)], { type: 'application/json' }));
    //@ts-ignore
    formData.append("imgFile", fileRef.current.files[0]);

    fetch("/company/req", {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        toastCallBack("업체 등록 완료, 로그인 해주세요.");
        onClose();
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="flex mt-6">
                <h1 className="text-3xl">제휴사 신청하기</h1>
                <h5>현재는 자동 가입 처리됩니다.</h5>
              </div>
              <div className="flex mt-10">
                <div>
                  <Input
                    className="mt-6"
                    label="ID"
                    placeholder="아이디를 적어주세요."
                    type="text"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                  />
                  <Input
                    className="mt-6"
                    label="비밀번호"
                    placeholder="비밀번호를 적어주세요."
                    type="password"
                    value={companyPassword}
                    onChange={(e) => setCompanyPassword(e.target.value)}
                  />
                  <Input
                    className="mt-6"
                    label="업체명"
                    placeholder="업체명을 적어주세요."
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <input
                    ref={fileRef}
                    accept="image/*"
                    className="hidden"
                    type="file"
                    onChange={() => onUploadImg()}
                  />
                  {
                    imgPath &&
                    <img alt="이미지 업로드" src={imgPath ? imgPath : ""} />
                  }
                  <Button onClick={() => fileRef.current.click()}>
                    사진 업로드
                  </Button>
                  <Button className="mt-6" onClick={() => onClickReg()}>가입하기</Button>
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
