/* eslint-disable react/prop-types */
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const { faqs } = props;

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} faq={faq} num={i} />
      ))}
    </div>
  );
};

export default Accordion;
