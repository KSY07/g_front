import {Button, Input, Radio, RadioGroup} from "@nextui-org/react";
import styles from "../../../styles/RequestQuotationModal.module.css"

interface Step5RequestProps {
    clientName: string;
    clientPhoneNumber: string;
    setClientName: (name: string) => void;
    setClientPhoneNumber: (phoneNumber: string) => void;
    setStep: (step: number) => void,
    onClickComplete: () => void,
}

export const Step5Request = (p:Step5RequestProps) => {
    return (
        <>
            <div className="flex mt-6">
                <p style={{marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>이름과 연락처를 알려주세요.</p>
            </div>
            <div style={{display: "flex", marginTop: "40px", flexDirection:"column"}}>
                <div>
                    <Input type="text" placeholder="이름을 입력해 주세요." size="lg" onChange={(e) => p.setClientName(e.target.value)} />
                </div>
                <div style={{display: "flex", flexDirection:"row", marginTop: "40px"}}>
                    <Input type="text" placeholder="핸드폰 번호를 입력해 주세요." size="lg" onChange={(e) => p.setClientPhoneNumber(e.target.value)} />
                    <Button color="default" size="lg" style={{marginLeft:"10px"}}>인증</Button>
                </div>
            </div>
            <div className={styles.button_container}>
                <Button color="default" size="lg" style={{width: "45%", marginRight:"10px"}} onClick={() => p.setStep(3)}>이전</Button>
                <Button color="primary" size="lg" style={{width: "45%", marginLeft:"10px"}} onClick={() => p.onClickComplete()}>완료</Button>
            </div>
        </>
    );
}