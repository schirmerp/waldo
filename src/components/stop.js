import React from "react";
import { useState, useEffect } from "react";
import Item from "./item";
import styles from "./item.css"

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const ref = React.createRef
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    const check = document.getElementById('stopwatch')
    if(check)[
      console.log('stop.js' + check)
    ]
    return (
      <div id="stopwatch"className={styles.stopwatch} ref={ref} id={running ? "ClockRunning" : "ClockNotRunning"}>
          <div className={running ? "buttonsOn" : "buttonsOff"}>
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => setTime(0)}>Reset</button>       
        </div>
        <div className={styles.numbers}>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        
      </div>
    );
  };

  export default Stopwatch