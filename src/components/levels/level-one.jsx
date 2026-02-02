import React from "react";
import LevelTwo from "./LevelTwo";

const LevelOne = () => {
  return (
    <div className="bg-blue-300 p-3">
      level one
      <LevelTwo />
    </div>
  );
};

export default LevelOne;
