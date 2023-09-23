/* eslint-disable react/prop-types */
const Button = ({ bgColor, textColor, children, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
