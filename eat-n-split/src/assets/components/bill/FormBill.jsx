/* eslint-disable react/prop-types */
import Button from "../Button";
import InputForm from "../InputForm";
import SelectForm from "./SelectForm";

const FormBill = ({ bill }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with {bill.name}</h2>
      <InputForm isDisabled={false}>
        <span>💰</span>
        Bill value
      </InputForm>
      <InputForm isDisabled={false}>
        <span>👨‍💼</span>
        Your expense
      </InputForm>
      <InputForm isDisabled={true}>
        <span>🤵</span>
        {bill.name} expense
      </InputForm>
      <SelectForm friend={bill}>
        <span>🤑</span>
        Who is paying the bill
      </SelectForm>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormBill;
