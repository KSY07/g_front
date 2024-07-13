import styles from "../../../styles/RequestQuotationModal.module.css"
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button } from "@nextui-org/button";

interface Step1RequestProps {
    interiorTypeSelected: string,
    setInteriorTypeSelected: (interiorTypeSelected: string) => void,
    setStep: (step: number) => void,
}

export const Step1Request = (p:Step1RequestProps) => {
    return (
        <>
        <div className="flex mt-6">
            <p style={{marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>어떤 건물을 인테리어 하실건가요?</p>
        </div>
        <div style={{display: "flex", marginTop: "40px"}}>
            <RadioGroup value={p.interiorTypeSelected} onValueChange={p.setInteriorTypeSelected}>
                <Radio value="apart" size="lg">아파트</Radio>
                <Radio value="villa" size="lg">빌라</Radio>
                <Radio value="house" size="lg">주택</Radio>
                <Radio value="officetel" size="lg">오피스텔</Radio>
            </RadioGroup>
        </div>
        <div className={styles.button_container}>
            <Button color="primary" size="lg" style={{width: "100%"}} onClick={() => p.setStep(1)}>다음</Button>
        </div>
        </>
    );
}