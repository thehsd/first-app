// import { useState } from "react";
// import CountDown from "../../components/count-down";

// const HomeView = () => {
//   const [number, setNumber] = useState(1);
//   function handleClick() {
//     setTimeout(() => {
//       setNumber((perv) => perv + 1);
//       console.log("  ~ number : ", number);
//     }, 1000);
//   }
//   return (
//     <div>
//       <CountDown time={10} />
//       <button className="bg-sky-500 cursor-pointer p-2" onClick={handleClick}>
//         click here
//       </button>
//       <br />
//       number: {number}
//     </div>
//   );
// };

// export default HomeView;

import React from "react";
import LevelOne from "../../components/levels/level-one";
import ThemeContext from "../../context/theme-context";
import { useCount } from "../../store/count-store";

const HomeView = () => {
  const { count, increase, decrease } = useCount();
  const [theme, setTheme] = React.useState("light");

  function incFn() {
    increase(5);
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* theme is {theme} */}
        {/* <LevelOne /> */}

        <p>current count: {count}</p>
        <button onClick={incFn}>increase</button>
        <br />
        <br />
        <button onClick={decrease}>decrease</button>
      </ThemeContext.Provider>
    </div>
  );
};

export default HomeView;
