import { useState } from "react";

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item.props}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="border border-gray-300 rounded-md mb-2 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-medium">{title}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export { AccordionItem };
export default Accordion;

/**
 *  <div className="max-w-2xl mx-auto mt-8 p-4">
        <Accordion>
          <AccordionItem title="What is React?">
            <p>
              React is a JavaScript library for building user interfaces. It
              lets you compose complex UIs from small and isolated pieces of
              code called components.
            </p>
          </AccordionItem>

          <AccordionItem title="How does the Accordion work?">
            <p>
              Click on the header to expand or collapse the content. Only one
              accordion can be open at a time - opening one will close the
              others.
            </p>
          </AccordionItem>

          <AccordionItem title="Can I put any content inside?">
            <div>
              <p>Yes! You can put any content inside the accordion:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Text paragraphs</li>
                <li>Lists</li>
                <li>Other React components</li>
                <li>Images, forms, etc.</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
 */
