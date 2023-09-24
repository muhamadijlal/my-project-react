import Button from "../Button";
import InputForm from "../InputForm";
import SelectForm from "./SelectForm";

const FormBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Jhon Doe</h2>
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
        JhonDoe expense
      </InputForm>
      <SelectForm>
        <span>🤑</span>
        Who is paying the bill
      </SelectForm>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormBill;
