/* eslint-disable react/prop-types */
const Caption = ({ step, messages }) => {
  return (
    <p className="message">
      Step {step} : {messages[step - 1]}
    </p>
  );
};

export default Caption;
