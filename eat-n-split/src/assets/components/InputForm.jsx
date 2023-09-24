/* eslint-disable react/prop-types */
const InputBill = ({ isDisabled, children, value, onValueChange }) => {
  return (
    <>
      <label>{children}</label>
      <input
        value={value}
        type="text"
        disabled={isDisabled}
        onChange={onValueChange}
      />
    </>
  );
};

export default InputBill;
