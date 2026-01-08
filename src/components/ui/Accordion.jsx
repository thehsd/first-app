import { useState } from "react";
import AccordionItem from "./accordion-item";

const AccordionWrapper = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto p-4 ">
      {items.map((item, i) => {
        return (
          <AccordionItem
            key={i}
            title={item.q}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          >
            {item.answer}
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default AccordionWrapper;
