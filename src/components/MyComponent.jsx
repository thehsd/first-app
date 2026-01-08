import { useState } from "react";

const MyComponent = () => {
  // fiber batch
  const [number, setNumber] = useState(10);
  // state
  // function => setter state

  function increaseNumber() {
    setNumber(number + 1);
    setNumber(number + 1);
  }

  function decreaseNumber() {
    setNumber(number - 1);
  }

  return (
    <>
      <p>number : {number}</p>
      <br />
      <button
        className="border border-gray-700 rounded-md p-3 cursor-pointer"
        onClick={increaseNumber}
      >
        increase number
      </button>
      <button
        className="border border-gray-700 rounded-md p-3 cursor-pointer"
        onClick={decreaseNumber}
      >
        decrease number
      </button>
      {/* input => onchage  => set state */}
      {/* p > state '' */}
    </>
  );
};

export default MyComponent;
