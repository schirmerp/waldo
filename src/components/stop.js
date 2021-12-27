import React from "react";
import { useState, useEffect } from "react";

import styles from "./item.css"

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [found, setFound] = useState(0)
    //const sb = document.getElementsByClassName('ooeAq8rJ6iXQF7tEFjKF')
    //console.log(document.body.children.app.children)
    //console.log(sb)
    
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

    const oc = (e) =>{
      console.dir(e.target.parentElement.offsetParent.id)
      
      console.dirxml(e.target.parentElement)
    }
    useEffect(()=>{
      window.addEventListener('click', ()=>{
        setRunning(true)
      })
      

      return(
        window.removeEventListener('click', ()=>{
          setRunning(true)
        })
      )
    })
    
    
    return (
      <div onClick={oc} id="stopwatch"className={styles.stopwatch} ref={ref} id={running ? "ClockRunning" : "ClockNotRunning"}>
          
        <div id="clock" className={styles.numbers}>
          <span id="minute">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span id="second">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span id="milli">{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        
      </div>
    );
  };

  export default Stopwatch


  /*
  <div className={running ? "buttonsOn" : "buttonsOff"}>
            <div className="messenger"></div>
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => setTime(0)}>Reset</button>       
        </div>
  */