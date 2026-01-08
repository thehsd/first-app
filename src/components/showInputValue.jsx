import { useState } from "react";

const ShowInputValue = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (inputVal.trim()) {
      setInputValue(inputVal.trim());
    }
  };
  //   conditional rendering in react
  return (
    <>
      <input
        className="border border-e-gray-300 p-2 rounded-md m-1 outline-none"
        type="password"
        placeholder=" enter...."
        onChange={handleChange}
      />
      <br />
      <button>show password</button>
      <br />
      <p>input value : {inputValue}</p>
    </>
  );
};
export default ShowInputValue;
