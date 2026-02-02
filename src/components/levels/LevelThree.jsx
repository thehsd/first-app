import React, { useContext } from "react";
import ThemeContext from "../../context/theme-context";

const LevelThree = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="bg-amber-300 p-3">
      <button onClick={changeTheme}> change Theme</button>
    </div>
  );
};

export default LevelThree;
