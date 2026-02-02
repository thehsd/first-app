import React, { useEffect, useState } from "react";
import clsx from "clsx";
const CountDown = ({ time = 0 }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((p) => p - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  function handleResend() {
    console.log("handle resend");
  }

  return (
    <div>
      <button
        className={clsx(
          !timeLeft && "bg-sky-500 cursor-pointer",
          timeLeft && "bg-sky-200 pointer-events-none cursor-none",
          "rounded-md p-3 ",
        )}
        onClick={handleResend}
      >
        {timeLeft ? (
          <>
            {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
          </>
        ) : (
          "ارسال مجدد"
        )}
      </button>
    </div>
  );
};

export default CountDown;
