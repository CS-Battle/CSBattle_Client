import React, { useState, useEffect, useRef } from "react";

interface SetTimes {
  time: number;
}
const Timer = ({ time }: SetTimes) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds <= 0) clearInterval(interval);
      else setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds == 0) {
      alert("time out");
      setSeconds(30);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="w-10 h-10 bg-OnPrimary rounded-full grid place-items-center border border-OnPrimaryContainer">
      <p className="text-red-400 text-base">{seconds}</p>
    </div>
  );
};

export default Timer;
