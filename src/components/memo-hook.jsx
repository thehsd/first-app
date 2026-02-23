import React, { useCallback, useMemo, useState } from "react";
import Child from "./child";

const getParams = (text) => {
  if (text.length < 2) {
    return [...text];
  }

  const param = [];

  const letters = [...text];
  letters.forEach((letter, index) => {
    const without = [...letters];
    without.splice(index, 1);
    getParams(without).forEach((e) => {
      param.push(letter + e);
    });
  });
  return param;
};

const MemoHook = () => {
  const [letter, setLetter] = useState("");
  const [show, setShow] = useState(true);

  const params = useMemo(() => getParams(letter || ""), [letter]);

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setLetter(e.target.value)}
        placeholder="enter"
      />
      <br />
      <br />
      <br />
      <br />
      <Child onclick={handleClick} show={show} />
      {show && (
        <ul>
          {params.map((item) => {
            return <li key={item}> {item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default MemoHook;
