import { useRef, useState } from "react";
import Bubble from "./Bubble";


function Card() {
  let [allTimer,setAllTimer] = useState([])
  let timeRef = useRef()
  return (
    <div className="container">
      <div className="input-section">
      <input type="text" placeholder="Enter number..." ref={timeRef}/>
      <button onClick={
            ()=>{
                  let x = [...allTimer]
                  setAllTimer([...x,timeRef.current.value])
            }
      }>Add Timer</button>
      </div>
 
      <div className="timers">
        {
          allTimer.map(elem=>{
            return <Bubble time={elem}/> 
          })
        }
      </div>
    </div>
  );
}

export default Card;
