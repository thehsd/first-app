import React, { memo } from "react";

const Child = memo(({ onclick, show }) => {
  console.log("render");

  return <button onClick={onclick}>{!show ? "show" : "hide"}</button>;
});

export default Child;
