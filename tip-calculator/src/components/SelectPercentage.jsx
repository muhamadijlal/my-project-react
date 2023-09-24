/* eslint-disable react/prop-types */
const SelectPercentage = ({ percentage, children, setPercentage, bill }) => {
  const isDisable = bill === "" || bill === 0 || isNaN(bill);
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
        disabled={isDisable ? true : false}
      >
        <option value={0}>Disatisfied (0%)</option>
        <option value={10}>It was okay (10%)</option>
        <option value={15}>It was good (15%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
