import { useEffect, useState } from "react";

function WindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log("resize");
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // cleanUp
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-red-100 p-4 rounded-md w-1/2">
      <div>Window Resize Component</div>
      <p>height : {windowSize.height} </p>
      <p>width : {windowSize.width} </p>
    </div>
  );
}

export default WindowResize;
