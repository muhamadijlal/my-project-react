/* eslint-disable react/prop-types */
const SelectBill = ({ children }) => {
  return (
    <>
      <label>{children}</label>
      <select>
        <option value="you">You</option>
        <option value="jhondoe">JhonDoe</option>
      </select>
    </>
  );
};

export default SelectBill;
