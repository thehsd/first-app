import { useState } from "react";

const PasswordInput = () => {
  // let inputType = "password";
  const [inputType, setInputType] = useState("password");

  function handleShowPass() {
    // if (inputType === "password") {
    //   setInputType("text");
    // } else {
    //   setInputType("password");
    // }
    setInputType(inputType === "password" ? "text" : "password");
    // inputType = inputType === "password" ? "text" : "password";
  }

  return (
    <div className="flex gap-x-1 border border-gray-500 p-2 rounded-md w-fit m-2">
      <input
        className="border-none outline-none"
        type={inputType}
        placeholder="enter your password"
      />
      <button
        onClick={handleShowPass}
        className="border border-gray-300 p-1 cursor-pointer rounded-md"
      >
        {inputType === "password" ? "show" : "hide"} password
      </button>
    </div>
  );
};

export default PasswordInput;
