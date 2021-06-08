import { useEffect, useState } from "react";

export default function Bubble(props) {
  let [time, setTime] = useState(props.time);
  console.log(time);
  let intervalId;
  useEffect(() => {
    console.log(time);
    if (time === 0) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(()=>setTime(time - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [time]);
  return <div>{time !== 0 && <p>{time}</p>}</div>;
}
