/* eslint-disable react/prop-types */
const Output = ({ bill, tip }) => {
  return (
    <h3>
      You pay ${(bill || 0) + tip} (${bill || 0} + ${tip} tip)
    </h3>
  );
};

export default Output;
