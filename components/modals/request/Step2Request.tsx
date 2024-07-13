import styles from "../../../styles/RequestQuotationModal.module.css"
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Button } from "@nextui-org/button";


interface Step2RequestProps {
    dueDateSeleted: string,
    setDueDateSeleted: (interiorTypeSelected: string) => void,
    setStep: (step: number) => void,
}

export const Step2Request = (p:Step2RequestProps) => {
    return (
        <>
            <div className="flex mt-6">
                <p style={{marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>공사 예정일이 언제인가요?</p>
            </div>
            <div style={{display: "flex", marginTop: "40px"}}>
                <RadioGroup value={p.dueDateSeleted} onValueChange={p.setDueDateSeleted}>
                    <Radio value="less1month" size="lg">1개월 이내</Radio>
                    <Radio value="less2month" size="lg">2개월 이내</Radio>
                    <Radio value="less3month" size="lg">3개월 이내</Radio>
                    <Radio value="more3month" size="lg">3개월 이후</Radio>
                    <Radio value="none" size="lg">미정</Radio>
                </RadioGroup>
            </div>
            <div className={styles.button_container}>
                <Button color="default" size="lg" style={{width: "45%", marginRight:"10px"}} onClick={() => p.setStep(0)}>이전</Button>
                <Button color="primary" size="lg" style={{width: "45%", marginLeft:"10px"}} onClick={() => p.setStep(2)}>다음</Button>
            </div>
        </>
    );
}