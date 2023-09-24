import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Button from "./Button";
import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        bill={bill}
        percentage={percentage1}
        setPercentage={setPercentage1}
      >
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage
        bill={bill}
        percentage={percentage2}
        setPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>

      {(bill > 0 || isNaN(bill)) && (
        <>
          {!isNaN(bill) ? <Output tip={tip} bill={bill} /> : <br />}
          <Button onReset={handleReset} />
        </>
      )}
    </>
  );
};

export default TipCalculator;
