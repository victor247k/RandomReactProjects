import { useState, useEffect, useRef } from 'react'

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setRunning(false); 
  };

  useEffect(() => {
    first

    return () => {
      second
    }
  }, [third])

  return (
    <div>
      <h1 className="time">
        {hours < 9 ? `0${hours}` : hours}:
        {minutes < 9 ? `0${minutes}` : minutes}:
        {seconds < 9 ? `0${seconds}` : seconds}
      </h1>
      <div className="btns">
        <button className="btn-green" onClick={handleStart}>Start</button>
        <button className="btn-green" onClick={handleStop}>Stop</button>
        <button className="btn-green" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
