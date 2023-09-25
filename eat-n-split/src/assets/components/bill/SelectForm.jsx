/* eslint-disable react/prop-types */
const SelectBill = ({ children, friend }) => {
  return (
    <>
      <label>{children}</label>
      <select>
        <option value="you">You</option>
        <option value={friend.id}>{friend.name}</option>
      </select>
    </>
  );
};

export default SelectBill;
