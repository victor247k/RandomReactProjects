import React, { useState, useEffect, useRef } from 'react'

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  const handleStart = () => {
    setRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setRunning(false);
  };

  useEffect(() => {

    if (running) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)   
      }, 10);
    }

    return () => clearInterval(intervalIdRef.current);

  }, [running])

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
  };

  return (
    <div className="stop-watch">
      <h1 className="time">
        {formatTime()}
      </h1>
      <div className="btns">
        <button className="btn-green" onClick={handleStart}>Start</button>
        <button className="btn-red" onClick={handleStop}>Stop</button>
        <button className="btn-blue" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch 
