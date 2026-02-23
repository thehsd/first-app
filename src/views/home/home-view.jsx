import React from "react";
import MemoHook from "../../components/memo-hook";
import TransitionList from "../../components/use-transition";
import OptimisticHook from "../../components/use-optimistic";
import OptimisticTodo from "../../components/use-optimistic";
import Todos from "../../components/todos";

const HomeView = () => {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  // const [mEnter, setMEnter] = useState(0);

  // const mouseRef = useRef(0);

  // const handleMouseEnter = () => {
  //   mouseRef.current = mouseRef.current + 1;
  //   console.log("  ~  mouseRef.current : ", mouseRef.current);
  // };
  // console.log("render");

  return (
    <div>
      {/* <input ref={inputRef} type="text" placeholder="enter something" /> */}
      {/* <button onClick={showRefValue}>show ref value</button> */}
      {/* <div
        className="w-32 h-32 bg-sky-400"
        onMouseEnter={handleMouseEnter}
      ></div> */}
      {/* <MemoHook /> */}
      {/* <TransitionList /> */}
      <Todos />
    </div>
  );
};

export default HomeView;
