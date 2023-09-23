/* eslint-disable react/prop-types */
import { useState } from "react";

const AccordionItem = ({ faq, num }) => {
  const { title, text } = faq;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`item${isOpen ? " open" : ""}`} onClick={handleToggle}>
      <p className="number">{num > 9 ? num + 1 : `0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
