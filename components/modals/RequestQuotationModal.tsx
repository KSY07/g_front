import { useState } from "react";
import {
  DateValue,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { Progress } from "@nextui-org/progress";

import styles from "../../styles/RequestQuotationModal.module.css";

import { Step1Request } from "@/components/modals/request/Step1Request";
import { Step2Request } from "@/components/modals/request/Step2Request";
import { Step3Request } from "@/components/modals/request/Step3Request";
import { Step4Request } from "@/components/modals/request/Step4Request";
import { Step5Request } from "@/components/modals/request/Step5Request";

export const RequestQuotationModal = () => {
  let dateFormatter = useDateFormatter({ dateStyle: "full" });
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(20);
  // Values
  const [interiorTypeSelected, setInteriorTypeSelected] = useState("");
  const [dueDateSelected, setDueDateSelected] = useState("");
  const [budgetSelected, setBudgetSelected] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [measurementEnableDate, setMeasurementEnableDate] = useState<DateValue>(
    parseDate("2024-01-01"),
  );
  const [clientName, setClientName] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  // End of Values

  const onClickComplete = () => {
    const data = {
      interiorType: interiorTypeSelected,
      dueDate: dueDateSelected,
      budgetSelected: budgetSelected,
      address: address,
      detailAddress: detailAddress,
      measurementEnableDate: dateFormatter.format(
        measurementEnableDate.toDate(getLocalTimeZone()),
      ),
      clientName: clientName,
      clientPhoneNumber: clientPhoneNumber,
    };

    console.log(data);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        setProgress(16.6667);

        return (
          <Step1Request
            interiorTypeSelected={interiorTypeSelected}
            setInteriorTypeSelected={setInteriorTypeSelected}
            setStep={setStep}
          />
        );
      case 1:
        setProgress(33.3333);

        return (
          <Step2Request
            dueDateSeleted={dueDateSelected}
            setDueDateSeleted={setDueDateSelected}
            setStep={setStep}
          />
        );
      case 2:
        setProgress(50);

        return (
          <Step3Request
            budgetSelected={budgetSelected}
            setBudgetSelected={setBudgetSelected}
            setStep={setStep}
          />
        );
      case 3:
        setProgress(83.3333);

        return (
          <Step4Request
            address={address}
            detailAddress={detailAddress}
            measurementEnableDate={measurementEnableDate}
            setAddress={setAddress}
            setDetailAddress={setDetailAddress}
            setMeasurementEnableDate={setMeasurementEnableDate}
            setStep={setStep}
          />
        );
      case 4:
        setProgress(100);

        return (
          <Step5Request
            clientName={clientName}
            clientPhoneNumber={clientPhoneNumber}
            setClientName={setClientName}
            setClientPhoneNumber={setClientPhoneNumber}
            setStep={setStep}
            onClickComplete={onClickComplete}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="flex justify-center">
                <Progress
                  aria-label="Loading..."
                  className={styles.gauge}
                  color="primary"
                  value={progress}
                />
              </div>
              <>{renderContent()}</>
            </ModalBody>
            <ModalFooter />
          </>
        )}
      </ModalContent>
    </>
  );
};
