const AccordionItem = ({ title, children, isOpen, onToggle, testFn }) => {
  console.log("  ~ testFn : ", testFn);
  return (
    <div className="border border-gray-300 rounded-md m-2">
      <button
        onClick={onToggle}
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 "
      >
        <span>{title}</span>
      </button>
      <div
        className={` transition-all  duration-200 ease-in-out
      ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
