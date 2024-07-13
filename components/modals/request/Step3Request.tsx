import styles from "../../../styles/RequestQuotationModal.module.css"
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button } from "@nextui-org/button";

interface Step3RequestProps {
    budgetSelected: string,
    setBudgetSelected: (interiorTypeSelected: string) => void,
    setStep: (step: number) => void,
}

export const Step3Request = (p:Step3RequestProps) => {
    return (
        <>
            <div className="flex mt-6">
                <p style={{marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>인테리어 예산을 알려주세요.</p>
            </div>
            <div style={{display: "flex", marginTop: "40px"}}>
                <RadioGroup value={p.budgetSelected} onValueChange={p.setBudgetSelected}>
                    <Radio value="less1m" size="lg">1천만원 미만</Radio>
                    <Radio value="range1m" size="lg">1천만원대</Radio>
                    <Radio value="range2m" size="lg">2천만원대</Radio>
                    <Radio value="range3m" size="lg">3천만원대</Radio>
                    <Radio value="range4m" size="lg">4천만원대</Radio>
                    <Radio value="over5m" size="lg">5천만원 이상</Radio>
                    <Radio value="none" size="lg">미정</Radio>
                </RadioGroup>
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
                <svg width="20" height="20" fill="none">
                    <path fill="#555" fill-rule="evenodd"
                          d="M11.75 4.02a2 2 0 0 0-3.5 0L2.46 14.54a2 2 0 0 0 1.76 2.96h11.56a2 2 0 0 0 1.76-2.96L11.75 4.02Zm-1.18 8.77.11-5.29H9.31l.11 5.3h1.15Zm-1.16 2c.16.14.36.21.59.21a.88.88 0 0 0 .71-.36.65.65 0 0 0 .12-.37c0-.2-.08-.36-.25-.5a.86.86 0 0 0-.58-.22.87.87 0 0 0-.6.22.63.63 0 0 0-.23.5c0 .2.07.38.24.52Z"
                          clip-rule="evenodd">
                    </path>
                </svg>
                <p style={{marginLeft:"10px", fontSize:"12px"}}>공사예산이 1,500만원 이상인 경우 실내건축공사업 면허가 있는 사업자와 공사를 진행하여야 법적인 보호를 받을 수 있으니 확인 후 이용해 주세요.</p>
            </div>
            <div className={styles.button_container}>
                <Button color="default" size="lg" style={{width: "45%", marginRight: "10px"}}
                        onClick={() => p.setStep(1)}>이전</Button>
                <Button color="primary" size="lg" style={{width: "45%", marginLeft: "10px"}}
                        onClick={() => p.setStep(3)}>다음</Button>
            </div>
        </>
    );
}