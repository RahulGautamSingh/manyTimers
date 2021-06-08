import { useEffect, useState } from "react";
import "./bubble.css";
export default function Bubble(props) {
  let [time, setTime] = useState(props.time);
  console.log(time);
  let intervalId;
  useEffect(() => {
    console.log(time);
    if (time === 0) {
      clearInterval(intervalId);
    } else {
        // eslint-disable-next-line
      intervalId = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [time]);

  return (
    <div
      className="circle bounce-effect"
      style={{
        display: time === 0 ? "none" : "flex",
        opacity: time === 1 ? 0 : 1,
      }}
    >
      <p>{time}</p>
    </div>
  );
}
