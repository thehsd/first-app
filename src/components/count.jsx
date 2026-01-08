import React, { useState } from "react";

const Count = () => {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    setNumber(number - 1);
  }

  return (
    <div className="flex justify-between gap-x-3 w-32 border border-gray-500 m-3 p-3 rounded-md">
      <button
        onClick={increase}
        className={`w-6 h-6 rounded-full border cursor-pointer ${
          number > 9 && "border-gray-400 text-gray-400 !cursor-not-allowed"
        }`}
        disabled={number > 9}
      >
        +
      </button>
      <p> {number} </p>
      <button
        onClick={decrease}
        className={`w-6 h-6 rounded-full border cursor-pointer ${
          number < 1 && "border-gray-400 text-gray-400 !cursor-not-allowed"
        }`}
        disabled={number < 1}
      >
        -
      </button>
    </div>
  );
};

export default Count;
