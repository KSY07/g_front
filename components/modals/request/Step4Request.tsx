import {Button, DateInput, DatePicker, Input, Radio, RadioGroup} from "@nextui-org/react";
import styles from "../../../styles/RequestQuotationModal.module.css"
import {CalendarDate, DateValue, parseDate} from "@internationalized/date";
import {useState} from "react";
import DaumPostcodeEmbed from "react-daum-postcode";


interface Step4RequestProps {
    address: string,
    setAddress: (address: string) => void,
    detailAddress: string,
    setDetailAddress: (address: string) => void,
    measurementEnableDate: DateValue,
    setMeasurementEnableDate: (date: DateValue) => void,
    setStep: (step: number) => void,
}

export const Step4Request = (p:Step4RequestProps) => {

    const [findAddress, setFindAddress] = useState(false);

    const onCompleteAddressSearch = (data:any) => {
        p.setAddress(data.roadAddress);
        setFindAddress(false);
    }

    return (
        <>
            <div className="flex mt-6">
                <p style={{marginTop: "50px", fontWeight: "bold", fontSize: "24px"}}>시공할 곳의 주소가 어떻게 되나요?</p>
            </div>
            <div style={{display: "flex", marginTop: "40px", flexDirection:"column"}}>
                {/* Contents */}
                <div style={{display:"flex", flexDirection:"row"}}>
                    <Input type="text" variant="bordered" placeholder="주소를 검색해주세요." value={p.address} disabled={true} size="lg"/>
                    <Button style={{marginLeft:"10px"}} size="lg" onPress={() => setFindAddress(true)}>검색</Button>
                </div>
                {
                    findAddress &&
                    <div id="addressWrap">
                        <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
                    </div>
                }
                <div style={{marginTop:"20px"}}>
                    <Input type="text" variant="bordered"
                           placeholder="(선택) 지역과 상세주소를 입력해주세요."
                           value={p.detailAddress}
                           onChange={(e) => p.setDetailAddress(e.target.value)}
                           size="lg" />
                </div>
            </div>
            <div style={{display: "flex", marginTop: "50px", flexDirection:"row", alignItems:"end" }}>
                <p style={{fontWeight: "bold", fontSize: "24px"}}>실측 가능일이 언제인가요?</p>
                <p>(선택사항)</p>
            </div>
            <div style={{display: "flex", marginTop: "20px"}}>
                {/* Contents */}
                <DatePicker className="max-w-[284px]" label="선택해 주세요." value={p.measurementEnableDate} onChange={p.setMeasurementEnableDate} />
            </div>
            <div className={styles.button_container}>
                <Button color="default" size="lg" style={{width: "45%", marginRight: "10px"}}
                        onClick={() => p.setStep(2)}>이전</Button>
                <Button color="primary" size="lg" style={{width: "45%", marginLeft: "10px"}}
                        onClick={() => p.setStep(4)}>다음</Button>
            </div>
        </>
    );
}